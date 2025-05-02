import CamionRepository from '../../repositories/Camion/CamionRepository';


class CamionService {
    static async estadoCamion() {
        const camion = await CamionRepository.estadoCamion();
        const estado = camion.estado_camion;
        const camionTipo = camion.tipo_c;
        const camionData = {
            camionTipo: camionTipo,
            estado_camion: estado
        };
        return camionData;
    }

    static async configCamionAdmin() {
        const camion = await CamionRepository.estadoCamion();
        const estado = camion.estado_camion;
        const modelo = camion.modelo;
        const marca = camion.marca;
        const placa = camion.placa;
        const tipo = camion.tipo_c;
        const capacidad = camion.capacidad;
        const camionData = {
            placa: placa,
            tipo: tipo,
            estado_camion: estado,
            modelo: modelo,
            marca: marca,
            capacidad: capacidad,
        };
        return camionData;
    }
}

export default CamionService;