import React from 'react';
import { FaLightbulb } from 'react-icons/fa';
import predictionsData from '../data/predictions';

function PredictionInsights({ limit }) {
  return (
    <div>
      <div className="flex items-center space-x-2 mb-4">
        <FaLightbulb className="text-yellow-600" />
        <h2 className="text-xl font-bold">Prediction Insights</h2>
      </div>
      <ul className="space-y-2">
        {predictionsData.slice(0, limit || 5).map((prediction) => (
          <li key={prediction.id} className="p-2 bg-green-100 rounded">
            <p className="font-semibold">{prediction.message}</p>
            <p className="text-sm text-gray-600">Confidence: {prediction.confidence}%</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PredictionInsights;