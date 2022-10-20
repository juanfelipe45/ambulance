import { Observable } from 'rxjs';
import { AuthRepository } from './../domain/auth.repository';
import { Inject, Injectable } from "@angular/core";
import { Auth } from '../domain/auth';
import { AuthInfrastructure } from '../infrastructure/auth.infrastructure';
import { ITokens } from '../domain/tokens.interface';
import { StorageApplication } from './storage.application';
import { Router } from '@angular/router';
import { UtilsService } from '../../shared/services/utils/utils.service';

@Injectable()
export class AuthApplication {

  private userLogged : boolean = false;

  constructor(
    private readonly _router: Router,
    private readonly _utilService: UtilsService,
    private readonly _storageApplication: StorageApplication,
    @Inject(AuthInfrastructure) private readonly authRepository: AuthRepository,
  ) {}

  public login(auth: Auth) {
    return this.authRepository.login(auth).subscribe({
      next: this.userAuthenticated.bind(this),
      error: this.showMessageError.bind(this)
    });
  }

  private showMessageError(): void {
    this._utilService.showNotification('Credenciales incorrectas');
  }

  private userAuthenticated(response: ITokens): void {
    console.log(response);
    this._storageApplication.setField('accessToken', response.accessToken);
    this._storageApplication.setField('refreshToken', response.refreshToken);

    this.userLogged = true;

    this._router.navigate(['/dashboard']);
  }

  get isUserLogged(): boolean {
    const accessToken = this._storageApplication.getField('accessToken');
    const refreshToken = this._storageApplication.getField('refreshToken');

    return ((!!accessToken && !!refreshToken) || this.userLogged)

  }

  public logout(): void {
    this.userLogged = false;
    this._storageApplication.clear();
    this._router.navigate(['/']);
  }

  public getNewAccessToken(refreshToken: string): Observable<ITokens> {
    return this.authRepository.getNewAccessToken(refreshToken);
  }
}
