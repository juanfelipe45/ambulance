import { Medic, MedicProperties } from "./medic";

export class MedicFactory {
  create(
    nombre: string,
    apellido: string,
    segundo_nombre: string,
    cmp: string,
    correo: string,
    dni: string,
    foto: string,
  ) {
    const medicProperties: MedicProperties = {
      nombre,
      apellido,
      segundo_nombre,
      cmp,
      correo,
      dni,
      foto
    };

    if (nombre.trim() === '')
      throw new Error('Nombre no puede ser vació')

    if (apellido.trim() === '')
      throw new Error('Apellido no puede ser vació')

    return new Medic(medicProperties);
  }
}
