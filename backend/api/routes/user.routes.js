import express from 'express';
import { register, login, getProfile } from '../../api/controllers/user.controller.js';
import { auth } from '../../api/middleware/auth.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/profile', auth, getProfile);

// Define your routes here
router.get('/', (req, res) => {
    res.send('User route');
});

// Export the router as the default export
export default router;
