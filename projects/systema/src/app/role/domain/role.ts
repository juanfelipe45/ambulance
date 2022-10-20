export interface RoleRequired {
  readonly rol: string;
};

export interface RoleOptional {
  readonly id: number;
};

export type RoleProperties = Required<RoleRequired> & Partial<RoleOptional>;

export type RoleUpdate = Partial<{ role: string }>

export class Role {
  private readonly id: number;
  private rol: string;

  constructor(properties: RoleProperties) {
    Object.assign(this, properties);
  }

  properties(): RoleProperties {
    return {
      id: this.id,
      rol: this.rol,
    };
  }
}
