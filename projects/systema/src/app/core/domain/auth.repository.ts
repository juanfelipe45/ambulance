import { ITokens } from './tokens.interface';
import { Observable } from 'rxjs';
import { User } from './../../user/domain/user';
import { Auth } from './auth';

export interface AuthRepository {
  login(auth: Auth): Observable<ITokens>
  getNewAccessToken(refreshToken: string): Observable<any>
}
