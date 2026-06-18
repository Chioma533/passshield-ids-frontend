// Obsolete: Replaced by dynamic backend responses from the Flask API.
export const PERFORMANCE_METRICS = {
  accuracy: 0,
  precision: 0,
  recall: 0,
  f1Score: 0,
  falsePositiveRate: 0
};

export const SUMMARY_STATS = {
  totalRecords: 0,
  normalTraffic: 0,
  threatsDetected: 0,
  riskLevel: "Low"
};

export const ATTACK_DISTRIBUTION = {
  pie: {
    labels: [],
    data: [],
    colors: []
  },
  bar: {
    labels: [],
    data: [],
    colors: []
  }
};

export const MOCK_PREDICTIONS = [];
