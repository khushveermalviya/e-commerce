from fastapi import FastAPI
from kafka import KafkaConsumer, KafkaProducer
import json
import boto3
from azure.ai.ml import MLClient
from azure.identity import DefaultAzureCredential
from sklearn.ensemble import IsolationForest
import pandas as pd

app = FastAPI()

# Kafka setup
producer = KafkaProducer(bootstrap_servers=['localhost:9092'])
consumer = KafkaConsumer('metrics', bootstrap_servers=['localhost:9092'], group_id='analytics')

# AWS SageMaker (optional)
sagemaker = boto3.client('sagemaker-runtime', region_name='us-east-1')

# Azure ML
ml_client = MLClient.from_config(credential=DefaultAzureCredential())

@app.get("/predict")
async def predict():
    # Mock ML model (replace with SageMaker or Azure ML endpoint)
    model = IsolationForest(contamination=0.1)
    data = pd.DataFrame([[65, 4.2, 120, 320]], columns=['cpu', 'memory', 'network', 'storage'])
    anomalies = model.fit_predict(data)
    return {"anomaly": anomalies[0] == -1}

# Background task to process metrics
async def process_metrics():
    for message in consumer:
        metrics = json.loads(message.value)
        # Call ML model (e.g., SageMaker)
        response = sagemaker.invoke_endpoint(
            EndpointName='YOUR_ENDPOINT',
            ContentType='application/json',
            Body=json.dumps(metrics)
        )
        prediction = json.loads(response['Body'].read())
        producer.send('predictions', json.dumps(prediction).encode('utf-8'))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)