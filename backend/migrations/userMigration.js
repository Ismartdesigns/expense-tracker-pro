const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

const runMigration = async () => {
    try {
        await mongoose.connect('mongodb+srv://admin:Admin%40123@cluster0.z1nd8.mongodb.net/expense-tracker');

        await User.init(); // Ensure the collection exists
        console.log('User collection is ready.');
    } catch (error) {
        console.error('Migration failed:', error);
    } finally {
        await mongoose.disconnect();
    }
};

runMigration();
