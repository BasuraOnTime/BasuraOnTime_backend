import db from '../../config/config-db';

class CamionRepository{

    static async estadoCamion() {
       const sql = 'SELECT * FROM camion';

       return db.execute(sql);
    }
}

export default CamionRepository;
