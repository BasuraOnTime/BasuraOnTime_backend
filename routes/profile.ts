import express from 'express';
import profile from '../controllers/Usuario-controller/profile-controller';
import verifyToken from '../middleware/VerifyToken';
const router = express.Router();


router.get('/', verifyToken, (req, res, next) => {
    console.log(req.body.id_rol);
    if (req.body.id_rol !== 2) {
        return res.status(403).json({ status: 'No tienes permisos para acceder a esta ruta' });
    }   
    next();
}, profile);


export default router;