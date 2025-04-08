import CamionRepository from '../../repositories/Camion/CamionRepository';
import Camion from '../../Dto/camion/Camion';

class CamionService {
    static async estadoCamion() {
        return await CamionRepository.estadoCamion();
    }
}

export default CamionService;