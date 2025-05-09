import  Express  from "express";
import EditarUsuario  from "../controllers/Usuario-controller/editUser";
import verifyToken from "../middleware/VerifyToken";

const router = Express.Router();

router.delete("/", verifyToken, EditarUsuario);
   
export default router;