import { Router } from 'express';
import { recuperarContraseña } from '../controllers/Usuario-controller/passwordController';

const router = Router();

router.post('/recuperar-password', recuperarContraseña);

export default router;
