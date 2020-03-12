import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserLift } from '../user-lift';
import { environment } from 'src/environments/environment';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserLiftService {
  
  httpOptions = { headers: new HttpHeaders({ 'Content-type': 'application/json' }) }

  constructor(private http: HttpClient) { }

  public findAll(): Observable<UserLift[]> {
    return this.http.get<UserLift[]>(`${environment.myUrl}api/v1/lifts`);
  }
 
public findByUser(user: User): Observable<UserLift[]>{
    return this.http.post<UserLift[]>(`${environment.myUrl}api/v1/lifts/findbyuser`, user);
}

  public save(userLift: UserLift) {
    return this.http.post<UserLift>(`${environment.myUrl}api/v1/lifts`, userLift);
  }

  public delete(userLiftId:number):Observable<{}> {
    return this.http.delete(`${environment.myUrl}api/v1/lifts/${userLiftId}`, this.httpOptions);
  }

}
