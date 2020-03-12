import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserLiftDetails } from '../user-lift-details';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserLiftDetailsService {
  
  httpOptions = { headers: new HttpHeaders({ 'Content-type': 'application/json' }) }

  constructor(private http: HttpClient) { }

  public findAll(): Observable<UserLiftDetails[]> {
    return this.http.get<UserLiftDetails[]>(`${environment.myUrl}api/v1/liftdetails`);
  }
 
  public save(userLiftDetails: UserLiftDetails) {
    return this.http.post<UserLiftDetails>(`${environment.myUrl}api/v1/liftdetails`, userLiftDetails);
  }

  public delete(userLiftDetailsId:number):Observable<{}> {
    return this.http.delete(`${environment.myUrl}api/v1/liftdetails/${userLiftDetailsId}`, this.httpOptions);
  }

}
