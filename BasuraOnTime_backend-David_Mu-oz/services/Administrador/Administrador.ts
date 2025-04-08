import AdministradorRepository from '../../Repository/Administrador/AdministradorRepository';   
import admin from '../../Dto/Admin/AdminDto';
import generateHash from '../../Helpers/generateHash';
import Auth from '../../Dto/Admin/AuthDto';


class UserService {
    
    static async register(user: admin) {
        user.password = await generateHash(user.password);
        return await adminRepository.add(user);
    }

    static async login(auth: Auth) {
        return await adminRepository.login(auth);
    }
}

export default UserService;