import SolitudRepository from '';
import  Solicitud  from '';

class SolicitudServis{
    static async registerSolicitud(solicitud: Solicitud) {
        return await SolitudRepository.add(solicitud);
    }
}

export default SolicitudServis;