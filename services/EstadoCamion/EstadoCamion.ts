import CamionRepository from '../../repositories/Camion/CamionRepository';


class CamionService {
    static async estadoCamion() {
        return await CamionRepository.estadoCamion();
    }
}

export default CamionService;