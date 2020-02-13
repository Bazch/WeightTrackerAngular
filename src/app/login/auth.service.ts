import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // BASE_PATH: 'http://localhost:8080'
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

 
  constructor(private http: HttpClient) {
  }

  authenticate(username, password) {
    return this.http.post<any>(`${environment.myUrl}authenticate` ,{username,password}).pipe(
     map(
       userData => {
        sessionStorage.setItem('username',username);
        let tokenStr= 'Bearer '+userData.token;
        sessionStorage.setItem('token', tokenStr);
        return userData;
       }
     )

    );
      }
  registerSuccessfulLogin(username) {
    sessionStorage.setItem('username', username);
  }

  logout() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('token');
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    if (user === null) return false
    return true
  }

  getLoggedInUserName() {
    let user = sessionStorage.getItem('username')
    if (user === null) return ''
    return user
  }
}