import mongoose from 'mongoose';

const ExpenseSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  description: String,
  date: {
    type: Date,
    default: Date.now
  },
  merchant: String,
  mlTags: {
    anomalyScore: Number,
    categoryConfidence: Number,
    predictedCategory: String
  }
});

const Expense = mongoose.model('Expense', ExpenseSchema);
export default Expense;
