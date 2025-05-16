import express from 'express';
import recoverPassword from '../controllers/Usuario-controller/recoverPassword';

const router = express.Router();

router.post('/reset-', recoverPassword);

export default router;
