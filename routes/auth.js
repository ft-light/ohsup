import express from 'express';
import { register, auth } from '../controllers/auth.js'

const router = express.Router();

router.post('/register', register);
router.post('/auth', auth);

export default router;
