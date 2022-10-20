import { ITokens } from './../../core/domain/tokens.interface';
import { catchError, mergeMap, Observable, retry, throwError } from "rxjs";
import { StorageApplication } from './../../core/application/storage.application';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { AuthApplication } from "../../core/application/auth.application";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private readonly _storageApplication: StorageApplication,
    private readonly injector: Injector
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const accessToken = this._storageApplication.getField('accessToken');
      const clonedRequest = req.clone({headers: req.headers.append('Authorization', `Bearer ${accessToken}`)});

      return next.handle(clonedRequest).pipe(catchError(
        (error: HttpErrorResponse) => {
          let errorMessage = '';

          if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = `Error: ${error.error.message}`;
          } else {
            // server-side error
            errorMessage = `Error Code: ${error.status} \nMessage: ${errorMessage}`;
            return this.handlerErrorBackend(req, next, error, errorMessage);
          }

          return throwError(() => new Error(errorMessage));
        }
      ));
  }

  handlerErrorBackend(req: HttpRequest<any>, next: HttpHandler, error: HttpErrorResponse, errorMessage: string): Observable<HttpEvent<any>> {
    const auth = this.injector.get(AuthApplication);

    if (error.status === 409) {
      const refreshToken = this._storageApplication.getField('refreshToken');

      return auth.getNewAccessToken(refreshToken).pipe(
        retry(3),
        mergeMap((tokens: ITokens) => {
          this._storageApplication.setField('accessToken', tokens.accessToken);
          this._storageApplication.setField('refreshToken', tokens.refreshToken);

          const clonedRequest = req.clone({headers: req.headers.append('Authorization', `Bearer ${tokens.accessToken}`)});

          return next.handle(clonedRequest);
        })
      );
    } else if (error.status === 401) {
      auth.logout();
    }
    return throwError(() => new Error(errorMessage));
  }
}
