import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from '../login/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthInterceptorService implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      if (this.authenticationService.isUserLoggedIn() && req.url.indexOf('basicauth') === -1) {
          const authReq = req.clone({
              headers: new HttpHeaders({
                  'Content-Type': 'application/json',
                  'Authorization': `Basic ${window.btoa(sessionStorage.getItem(this.authenticationService.USER_NAME_SESSION_ATTRIBUTE_NAME) + ":" + sessionStorage.getItem(this.authenticationService.USER_NAME_SESSION_ATTRIBUTE_PASSWORD))}`
              })
          });
          return next.handle(authReq);
      } else {
          return next.handle(req);
      }
  }
}