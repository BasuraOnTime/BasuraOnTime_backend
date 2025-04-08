import db from '../../config/config-db';
import Solicitud from '../../Dto/Solicitud/SolicitudDto';

class SolicitudRepository {
    static async add(solicitud: Solicitud) {
        const query = 'INSERT INTO solicitudes (id_solicitud, zona, cantidad, tipo_residuo, fecha_de_recoleccion, tamaño) VALUES( ?, ?, ?, ?, ?, ?)';
        const values = [solicitud.id_solicitud, solicitud.zona, solicitud.cantidad, solicitud.tipo_residuo, solicitud.fecha_de_recoleccion, solicitud.tamaño];
        return db.execute(query, values);
    }
}

export default SolicitudRepository;