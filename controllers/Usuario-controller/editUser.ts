import { Request, Response } from "express";
import UserService from "../../services/Usuario/UserServices";

const EditarUsuario = async (req: Request, res: Response) => {
  try {
    const { id, email, nombres, apellidos, direccion, password } = req.body;

    if (!id || !email || !nombres || !apellidos || !direccion || !password ) {
      return res.status(400).json({ message: "Faltan campos requeridos" });
    }

    const resultado = await UserService.EditarUsuario(id, email, nombres, apellidos, direccion ,password);

    if (resultado.status) {
      return res.status(200).json({ message: resultado.message });
    } else {
      return res.status(404).json({ message: resultado.message });
    }
  } catch (error) {
    console.error("Error al editar usuario:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

export default EditarUsuario;
