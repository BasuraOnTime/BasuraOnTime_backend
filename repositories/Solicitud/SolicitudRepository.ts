import db from '../../config/config-db';
import Solicitud from '../../Dto/Solicitudes/Solicitud';

class SolicitudRepository {
    static async add(solicitud: Solicitud) {
        const query = 'CALL AddSolicitud(?, ?, ?, ?, ?, ?, ?)';
        const values = [solicitud.zona, solicitud.cantidad, 
            solicitud.tipo_residuo, solicitud.fecha_solicitud, 
            solicitud.tamano, solicitud.estado, solicitud.id];
        return db.execute(query, values);
    }

    static async mostrarsoli(){
        const query = 'SELECT zona, fecha_recoleccion, cantidad, tipo_residuo, tamano, estado FROM solicitudes';
        const result = await db.execute(query);
        return result[0];
    }
}

export default SolicitudRepository;