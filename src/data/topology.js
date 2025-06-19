export default {
    nodes: [
      { id: 1, label: 'Server A', x: 100, y: 100 },
      { id: 2, label: 'Server B', x: 200, y: 150 },
      { id: 3, label: 'DB', x: 300, y: 100 },
    ],
    edges: [
      { from: 1, to: 2 },
      { from: 2, to: 3 },
    ],
  };