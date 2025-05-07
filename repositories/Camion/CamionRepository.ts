import db from '../../config/config-db';

class CamionRepository{

    static async addCamion(camion: any) {
        console.log("hola");
        const sql = 'INSERT INTO camion (placa, modelo, capacidad, estado_camion, marca, tipo_c) VALUES (?, ?, ?, ?, ?, ?)';
        const values = [camion.placa, camion.modelo, camion.capacidad, camion.estado_camion, camion.marca, camion.tipo_C];
        
        return db.execute(sql, values);
    }

    static async estadoCamion() {
       const sql = 'SELECT * FROM camion';
       const result: any = await db.execute(sql);
       const data = result[0];       
       return data;
    }
}

export default CamionRepository;
