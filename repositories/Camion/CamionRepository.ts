import db from '../../config/config-db';
import Camion from '../../Dto/camion/Camion';

class CamionRepository{

    static async estadoCamion(camion: Camion) {
       const sql = 'Select id_camion, estado_camion FROM camion';
       const values = [camion.id_camion, camion.estado_camion];
       return db.execute(sql, values);
    }
}

export default CamionRepository;
