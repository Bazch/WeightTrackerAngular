import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';
import { environment } from 'src/environments/environment';

 
@Injectable()
export class UserService {
 
 
  httpOptions = { headers: new HttpHeaders({ 'Content-type': 'application/json' }) }

  constructor(private http: HttpClient) { }
 
  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.myUrl}api/v1/users`);
  }
 
  public save(user: User) {
    return this.http.post<User>(`${environment.myUrl}register`, user);
  }

  public findByName(name: string):Observable<User[]>{
    return this.http.get<User[]>(`${environment.myUrl}api/v1/users/name/${name}`);
  }
  public findByUsername(username: string):Observable<User>{
    return this.http.get<User>(`${environment.myUrl}api/v1/users/username/${username}`);
  }

  public isEmailTaken(email: string):Observable<boolean>{   
    return this.http.get<boolean>(`${environment.myUrl}api/v1/users/email/${email}`);
  }

  public delete(userId:number):Observable<{}> {
    return this.http.delete(`${environment.myUrl}api/v1/users/${userId}`, this.httpOptions);
  }
}