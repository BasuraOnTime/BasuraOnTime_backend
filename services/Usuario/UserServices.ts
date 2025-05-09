import UserRepository from '../../repositories/Usuario/UserRepository';
import User from '../../Dto/Usuario/UserDto';
import generateHash from '../../Helpers/generateHash';
import Auth from '../../Dto/Usuario/AuthDto';


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


    static async EditarUsuario(id: number, password : number ,email: string, nombres: string, apellidos: string, direccion: string ) {
        const hashedPassword = await generateHash(password);
        return await UserRepository.EditarUsuario(id, email, hashedPassword, nombres, apellidos, direccion );
    }

}




export default UserService;