import express from 'express';
import { recuperarContraseña } from '../controllers/Usuario-controller/passwordController';

const router = express.Router();

router.post('/recuperar-password', recuperarContraseña);

export default router;
