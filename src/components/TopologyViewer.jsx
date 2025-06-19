import React from 'react';
import { FaSitemap } from 'react-icons/fa';
import topologyData from '../data/topology';

function TopologyViewer() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center space-x-2 mb-4">
        <FaSitemap className="text-blue-600" />
        <h2 className="text-xl font-bold">Topology Viewer</h2>
      </div>
      <div className="h-96 bg-gray-100 rounded flex items-center justify-center">
        <svg width="100%" height="100%" viewBox="0 0 400 300">
          {/* Nodes */}
          {topologyData.nodes.map((node) => (
            <circle
              key={node.id}
              cx={node.x}
              cy={node.y}
              r="20"
              fill="#3b82f6"
              stroke="#1e40af"
              strokeWidth="2"
            />
          ))}
          {/* Edges */}
          {topologyData.edges.map((edge, i) => (
            <line
              key={i}
              x1={topologyData.nodes[edge.from].x}
              y1={topologyData.nodes[edge.from].y}
              x2={topologyData.nodes[edge.to].x}
              y2={topologyData.nodes[edge.to].y}
              stroke="#6b7280"
              strokeWidth="2"
            />
          ))}
          {/* Labels */}
          {topologyData.nodes.map((node) => (
            <text
              key={node.id}
              x={node.x}
              y={node.y + 5}
              textAnchor="middle"
              fill="white"
              fontSize="12"
            >
              {node.label}
            </text>
          ))}
        </svg>
      </div>
    </div>
  );
}

export default TopologyViewer;