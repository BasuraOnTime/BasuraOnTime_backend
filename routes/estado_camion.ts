import express from 'express';
import verifyToken from '../middleware/VerifyToken';
const router = express.Router();

router.get('/', verifyToken)

export default router;