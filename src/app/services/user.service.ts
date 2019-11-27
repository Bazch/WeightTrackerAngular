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
    return this.http.get<User[]>(`${environment.myUrl}users`);
  }
 
  public save(user: User) {
    return this.http.post<User>(`${environment.myUrl}users`, user);
  }

  public findByName(name: string):Observable<User[]>{
    return this.http.get<User[]>(`${environment.myUrl}users/name/${name}`);
  }

  public delete(userId:number):Observable<{}> {
    return this.http.delete(`${environment.myUrl}users/${userId}`, this.httpOptions);
  }
}