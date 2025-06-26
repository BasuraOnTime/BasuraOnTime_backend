import db from '../../config/config-db';
import Conductor from '../../Dto/Conductores/Conductores';

class ConductorRepository {
  static async add(conductor: Conductor) {
    const query = `
      INSERT INTO conductores (nombres, apellidos, telefono, tipo_licencia, fecha_vencimiento_licencia)
      VALUES (?, ?, ?, ?, ?)
    `;
    const values = [
      conductor.nombres,
      conductor.apellidos,
      conductor.telefono,
      conductor.tipo_licencia,
      conductor.fecha_vencimiento_licencia
    ];
    return db.execute(query, values);
  }
}

export default ConductorRepository;
