import db from '../../config/config-db';

class CamionRepository{

    static async estadoCamion() {
       const sql = 'SELECT * FROM camion';
       const result: any = await db.execute(sql);
       const data = result[0][0];
       
       return data;
    }
}

export default CamionRepository;
