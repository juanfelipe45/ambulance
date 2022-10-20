export interface MedicRequired {
  nombre: string;
  apellido: string;
  segundo_nombre: string;
  cmp: string;
  correo: string;
  dni: string;
  foto: string;
}

export interface MedicOptional {
  id: number;
  activo: boolean;
}

export type MedicUpdate = Partial<{
  nombre: string;
  apellido: string;
  segundo_nombre: string;
  cmp: string;
  correo: string;
  dni: string;
  foto: string;
}>

export type MedicProperties = Required<MedicRequired> & Partial<MedicOptional>

export class Medic {
  private readonly id: number;
  private nombre: string;
  private apellido: string;
  private segundo_nombre: string;
  private cmp: string;
  private readonly correo: string;
  private dni: string;
  private foto: string;
  private activo: boolean;

  constructor(properties: MedicProperties) {
    this.activo = true;
    Object.assign(this, properties);
  }

  properties(): MedicProperties {
    return {
      id: this.id,
      nombre: this.nombre,
      apellido: this.apellido,
      segundo_nombre: this.segundo_nombre,
      cmp: this.cmp,
      correo: this.correo,
      dni: this.dni,
      foto: this.foto,
      activo: this.activo,
    };
  }

  update(fields: MedicUpdate): void {
    Object.assign(this, fields);
  }

  delete(): void {
    this.activo = false;
  }
}
