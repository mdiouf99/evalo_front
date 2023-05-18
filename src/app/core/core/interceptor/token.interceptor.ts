import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {from, mergeMap, Observable} from 'rxjs';
import {KeycloakService} from "keycloak-angular";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private kcService: KeycloakService) {
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
        return next.handle(modifiedRequest);
      })
    );
  }

}
