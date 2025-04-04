import CamionRepository from '../../repositories/Camion/CamionRepository';
import Camion from '../../Dto/camion/Camion';

class CamionService {
    static async estadoCamion(camion: Camion) {
        return await CamionRepository.estadoCamion(camion);
    }
}

export default CamionService;