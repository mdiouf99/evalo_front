import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {from, mergeMap, Observable, throwError} from 'rxjs';
import {KeycloakService} from "keycloak-angular";
import {catchError} from "rxjs/operators";
import {AlertService} from "../../../share/share/service/alert.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private kcService: KeycloakService,private alertService : AlertService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return from(this.kcService.getToken()).pipe(
      mergeMap(token => {
        const modifiedRequest = request.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        });
        // Continue the request with the modified request
        return next.handle(modifiedRequest).pipe(
          catchError((error) => {
            console.log('error is intercept')
            console.error(error);
            this.alertService.showError(error.message);
            return throwError(error.message);
          })
        )
          ;
      })
    );
  }

}
