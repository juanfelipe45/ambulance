import { Driver, DriverProperties } from "./driver";

export class DriverFactory {

  public static create(nombre: string): Driver {
    const driverProperties: DriverProperties = {
      nombre,
    };

    if (nombre.trim() === '')
      throw new Error('Nombre no puede ser vació')

    return new Driver(driverProperties);
  }

  public static update(nombre: string): Driver {
    const driverProperties: DriverProperties = {
      nombre,
    };

    if (nombre.trim() === '')
      throw new Error('Nombre no puede ser vació')

    return new Driver(driverProperties);
  }
}
