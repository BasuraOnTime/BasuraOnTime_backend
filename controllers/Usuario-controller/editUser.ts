import { Request, Response } from "express";
import UserService from "../../services/Usuario/UserServices";

const EditarUsuario = async (req: Request, res: Response) => {
  try {
    const { id, email, nombres, apellidos, direccion, password } = req.body;

    if (!id || !email || !nombres || !apellidos || !direccion || !password ) {
      return res.status(400).json({ message: "Faltan campos requeridos" });
    }
    delete req.body.id;
    const resultado = await UserService.EditarUsuario(email, nombres, apellidos, direccion, password, id);
    return res.status(200).json({
        status: "usuario editado correctamente",
    })
} catch (error: any) {
    if (error && error.code == "ER_DUP_ENTRY") {
      return res.status(500).json({ errorInfo: error.sqlMessage });
    }
    return res.status(500).json({ errorInfo: error });
  }
}

export default EditarUsuario;
