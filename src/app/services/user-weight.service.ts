import { Injectable } from '@angular/core';
import { UserWeight } from '../user-weight';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from './user.service';
import { User } from '../user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserWeightService {
 
  httpOptions = { headers: new HttpHeaders({ 'Content-type': 'application/json' }) }

  constructor(private http:HttpClient) { }
 
  public findAll(): Observable<UserWeight[]> {
    return this.http.get<UserWeight[]>(`${environment.myUrl}api/v1/weights`);
  }
 
  public save(userWeight: UserWeight) {
    return this.http.post<UserWeight>(`${environment.myUrl}api/v1/weights`, userWeight);
  }

  public delete(userWeightId:number):Observable<{}> {
    return this.http.delete(`${environment.myUrl}api/v1/weights/${userWeightId}`, this.httpOptions);
  }
}
