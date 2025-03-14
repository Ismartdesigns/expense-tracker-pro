import brain from 'brain.js';

export class ExpensePredictor {
  private net: brain.NeuralNetwork;

  constructor() {
    this.net = new brain.NeuralNetwork({
      hiddenLayers: [32, 16], // Similar to the TensorFlow model
      activation: 'relu',
    });
  }

  train(expenses: any[]) {
    const data = this.preprocessData(expenses);
    
    this.net.train(data, {
      iterations: 1000, // More iterations for better accuracy
      learningRate: 0.001,
      errorThresh: 0.005,
    });
  }

  predictExpense(features: number[]) {
    return this.net.run(features);
  }

  private preprocessData(expenses: any[]) {
    // Convert raw expense data into normalized input-output pairs
    return expenses.map(exp => ({
      input: this.normalizeFeatures(exp.features),
      output: [exp.amount / 10000], // Normalizing amount (example)
    }));
  }

  private normalizeFeatures(features: number[]): number[] {
    // Example: Normalize feature values between 0 and 1
    return features.map(f => f / Math.max(...features));
  }
}
