const mongoose = require('mongoose');
const User = require('../models/User');
const Transaction = require('../models/Transaction');
const Category = require('../models/Category');
const Expense = require('../models/Expense');

const runMigration = async () => {
    try {
        // Ensure MONGODB_URI is correctly set in environment variables
        const dbUri = process.env.MONGODB_URI || 'mongodb+srv://admin:Admin%40123@cluster0.z1nd8.mongodb.net/expense-tracker';

        await mongoose.connect(dbUri);

        console.log('Connected to MongoDB.');

        await User.init();
        await Transaction.init();
        await Category.init();
        await Expense.init();

        console.log('Database collections are initialized.');
    } catch (error) {
        console.error('Migration failed:', error.message);
    } finally {
        await mongoose.disconnect();
    }
};

runMigration();
