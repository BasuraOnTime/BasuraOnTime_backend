import db from '../../config/config-db';
import Solicitud from '../../Dto/Solicitudes/Solicitud';

class SolicitudRepository {
    static async add(solicitud: Solicitud) {
        const query = 'INSERT INTO solicitudes (id_solicitud, zona, cantidad, tipo_residuo, tamaño) VALUES( ?, ?, ?, ?, ?, ?)';
        const values = [solicitud.id_solicitud, solicitud.zona, solicitud.cantidad, solicitud.tipo_residuo, solicitud.tamaño];
        return db.execute(query, values);
    }
}

export default SolicitudRepository;