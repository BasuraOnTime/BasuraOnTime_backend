// import db from '../../config/config-db';

// class AdministradorRepository{

//     static async estadoCamion() {
//        const sql = 'SELECT * FROM administrador';

//        return db.execute(sql);
//     }
// }

// export default AdministradorRepository;


import db from '../../config/config-db';
import admin from '../../Dto/Admin/AdminDto';
import Auth from '../../Dto/Admin/AuthDto';
import bcrypt from 'bcryptjs';


class UserRepository {

    static async add(user: admin){
        const sql = 'INSERT INTO users (, nombre, apellidos, direccion, password) VALUES (?, ?, ?, ?, ?)';
        const values = [user.nombre, user.apellidos,  user.password];
        return db.execute(sql, values);
    }

    static async login(auth: Auth){
        const sql = 'SELECT id_usuario, password FROM users WHERE email = ?';
        const values = [auth.email];
        const result: any = await db.execute(sql, values);
        if (result[0].length > 0){
          const isPasswordValid = await bcrypt.compare(auth.password, result[0][0].password);
          if (isPasswordValid){
            return {logged: true, status: "Successful authentication", id: result[0][0].id_usuario}
          }
          return {logged: false, status: "Invalid username or password" };
        }
        return {logged: false, status: "Invalid username or password" };
    }
}


export default UserRepository;