import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    budgetLimit: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    preferences: {
        currency: {
            type: String,
            default: 'USD'
        },
        budgetLimits: {
            monthly: Number,
            categories: Map
        }
    },
    mlProfile: {
        spendingPatterns: [Number],
        riskScore: Number,
        lastUpdated: Date
    }
});

// Hash password before saving
UserSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

const User = mongoose.model('User', UserSchema);

// Export the model as the default export
export default User;
