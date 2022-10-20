import { User, UserProperties } from './user';
import { RoleProperties } from './../../role/domain/role';

export class UserFactory {
  static create(nombre: string, correo: string, password: string, roles: RoleProperties[]): User{
    const userProperties: UserProperties = {
      nombre,
      correo,
      password,
      roles,
      id: new Date().getTime(),
    }

    if (nombre.trim() === '')
      throw new Error('Nombre no puede ser vació')

    if (correo.trim() === '')
      throw new Error('Correo no puede ser vació')

    if (correo.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/))
      throw new Error('Nombre no puede ser vació')

    if (roles.length === 0)
      throw new Error('Debe seleccionar al menos un rol')

    return new User(userProperties);
  }
}
