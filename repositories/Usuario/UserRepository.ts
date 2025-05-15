import db from '../../config/config-db';
import User from '../../Dto/Usuario/UserDto';
import Auth from '../../Dto/Usuario/AuthDto';
import bcrypt from 'bcryptjs';
import { log } from 'console';


class UserRepository {

    static async add(user: User){
        const sql = 'INSERT INTO users (email, nombres, apellidos, password) VALUES (?, ?, ?, ?)';
        const values = [user.email, user.nombres, user.apellidos, user.password];
        return db.execute(sql, values);
    }

    static async login(auth: Auth){
        const sql = 'SELECT id_usuario, password, id_rol FROM users WHERE email = ?';
        const values = [auth.email];
        const result: any = await db.execute(sql, values);
        if (result[0].length > 0){
          const isPasswordValid = await bcrypt.compare(auth.password, result[0][0].password);
          if (isPasswordValid){
            return {logged: true, status: "Successful authentication", id: result[0][0].id_usuario, id_rol: result[0][0].id_rol};
          }
          return {logged: false, status: "Invalid username or password" };
        }
        return {logged: false, status: "Invalid username or password" };
    }

    static async Mostrarinfo(id: number){
        const sql = 'SELECT id_usuario, email, nombres, apellidos, direccion FROM users WHERE id_usuario = ?';
        const values = [id];
        const result: any = await db.execute(sql, values);
        if (result[0].length > 0){
            return {status: true, data: result[0][0]};
        }
        return {status: false, data: null};
    }

    static async EliminarUsuario(id: number) {
    const sql = 'DELETE FROM users WHERE id_usuario = ?';
    const values = [id];
    try {
        const result: any = await db.execute(sql, values);
        if (result[0].affectedRows > 0) {
            return { status: true, message: 'Usuario eliminado correctamente' };
        }
        return { status: false, message: 'Usuario no encontrado' };
    } catch (error) {
        return { status: false, message: 'Error al eliminar el usuario', error };
    }
}

static async EditarUsuario(nombres: string, apellidos: string, direccion: string, password: string, email: string) {
    const sql = `
        UPDATE users 
        SET nombres = ?, apellidos = ?, direccion = ?, password = ?
        WHERE email = ?`;
    const values = [nombres, apellidos, direccion, password, email];    
    const result: any = await db.execute(sql, values);
    return result;
}

}


export default UserRepository;