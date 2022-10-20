export interface DriverRequired {
  nombre: string;
}

export interface DriverOptional {
  id: number;
  activo: boolean;
}

export type DriverUpdate = Partial<{
  nombre: string;
}>

export type DriverProperties = Required<DriverRequired> & Partial<DriverOptional>

export class Driver {
  private readonly id: number;
  private nombre: string;
  private activo: boolean;

  constructor(properties: DriverProperties) {
    Object.assign(this, properties);
  }

  properties(): DriverProperties {
    return {
      id: this.id,
      nombre: this.nombre,
      activo: this.activo,
    };
  }

  update(fields: DriverUpdate): void {
    Object.assign(this, fields);
  }

  delete(): void {
    this.activo = false;
  }
}
