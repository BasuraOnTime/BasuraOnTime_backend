import db from '../../config/config-db';
import Camion from '../../Dto/camion/Camion';

class CamionRepository{

    static async estadoCamion(camion: Camion) {
       const sql = 'SELECT * FROM camion';

       if(camion.id_camion === undefined){
         console.log(sql)
       }
       return db.execute(sql);
    }
}

export default CamionRepository;
