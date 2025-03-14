import express from 'express';
import * as ExpenseController from '../controllers/expense.controller.js'; // Ensure the path and extension are correct

const router = express.Router();

// Create a new expense
router.post('/', ExpenseController.createExpense);

// Get all expenses
router.get('/', ExpenseController.getAllExpenses);

// Get a specific expense by ID
router.get('/:id', ExpenseController.getExpenseById);

// Update an expense by ID
router.put('/:id', ExpenseController.updateExpense);

// Delete an expense by ID
router.delete('/:id', ExpenseController.deleteExpense);

export default router;
