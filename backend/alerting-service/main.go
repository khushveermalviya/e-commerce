package main

import (
	"encoding/json"
	"fmt"
	"github.com/confluentinc/confluent-kafka-go/kafka"
	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/sns"
)

func main() {
	consumer, err := kafka.NewConsumer(&kafka.ConfigMap{
		"bootstrap.servers": "localhost:9092",
		"group.id":          "alerts",
		"auto.offset.reset": "earliest",
	})
	if err != nil {
		panic(err)
	}
	defer consumer.Close()

	producer, err := kafka.NewProducer(&kafka.ConfigMap{"bootstrap.servers": "localhost:9092"})
	if err != nil {
		panic(err)
	}
	defer producer.Close()

	consumer.SubscribeTopics([]string{"predictions"}, nil)

	snsClient := sns.New(session.Must(session.NewSession(&aws.Config{Region: aws.String("us-east-1")})))

	for {
		msg, err := consumer.ReadMessage(-1)
		if err == nil {
			var prediction map[string]interface{}
			json.Unmarshal(msg.Value, &prediction)
			if prediction["anomaly"] == true {
				alert := map[string]string{
					"message":  "Anomaly detected in infrastructure",
					"severity": "critical",
					"time":     fmt.Sprintf("%v", msg.Timestamp),
				}
				alertJSON, _ := json.Marshal(alert)
				producer.Produce(&kafka.Message{
					TopicPartition: kafka.TopicPartition{Topic: aws.String("alerts"), Partition: kafka.PartitionAny},
					Value:          alertJSON,
				}, nil)

				// Send to AWS SNS
				snsClient.Publish(&sns.PublishInput{
					Message:  aws.String(string(alertJSON)),
					TopicArn: aws.String("YOUR_SNS_TOPIC_ARN"),
				})
			}
		}
	}
}