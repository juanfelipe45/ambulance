import { User } from './../../user/domain/user';
import { Auth, AuthProperties } from './auth';
export class AuthFactory {
  static create(correo: string, password: string): Auth {
    const recaptchaReactive: string = 'abc';
    const authProperties: AuthProperties = {
      correo,
      password,
      recaptchaReactive
    }

    if (correo.trim() === '')
      throw new Error('Correo no puede ser vació')

    /*if (correo.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/))
      throw new Error('Nombre no puede ser vació')*/

    if (password.trim() === '')
        throw new Error('Correo no puede ser vació')

    return new Auth(authProperties);
  }
}
