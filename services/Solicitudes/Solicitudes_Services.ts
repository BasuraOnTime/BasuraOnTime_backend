import SolitudRepository from '../../repositories/Solicitud/SolicitudRepository';
import  Solicitud  from '../../Dto/Solicitudes/Solicitud';

class SolicitudServis{
    static async registerSolicitud(solicitud: Solicitud) {
        return await SolitudRepository.add(solicitud);
    }
}

export default SolicitudServis;