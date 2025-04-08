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


class adminRepository {

    static async add(user: admin){
        const sql = 'INSERT INTO administrador ( nombre, apellidos) VALUES (?, ?, ?, ?, ?)';
        const values = [user.nombre, user.apellidos, ];
        return db.execute(sql, values);
    }

    static async login(auth: Auth){
        const sql = 'SELECT id_admin, password FROM administrador WHERE /// = ?';
        const values = [auth./*id_admin*/];
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