import UserRepository from '../../repositories/Usuario/UserRepository';
import User from '../../Dto/Usuario/UserDto';
import generateHash from '../../Helpers/generateHash';
import Auth from '../../Dto/Usuario/AuthDto';
import e from 'express';


class UserService {
    
    static async register(user: User) {
        user.password = await generateHash(user.password);
        return await UserRepository.add(user);
    }

    static async login(auth: Auth) {
        return await UserRepository.login(auth);
    }

    static async MostrarInfo(id: number ) {
        return await UserRepository.Mostrarinfo(id);
    }

    static async EliminarUsuario(id: number) {
        return await UserRepository.EliminarUsuario(id);
    }


    static async EditarUsuario(email: string, nombres: string, apellidos: string, direccion: string, password: string, id: number) {
        const hashedPassword = await generateHash(password);
        return await UserRepository.EditarUsuario(email, nombres, apellidos, direccion, hashedPassword, id);
    }

}




export default UserService;