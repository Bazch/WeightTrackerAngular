import { Injectable } from '@angular/core';
import { UserWeight } from '../user-weight';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserWeightService {
  private usersUrl: string;
 
  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/weights';
  }
 
  public findAll(): Observable<UserWeight[]> {
    return this.http.get<UserWeight[]>(this.usersUrl);
  }
 
  public save(user: UserWeight) {
    return this.http.post<UserWeight>(this.usersUrl, user);
  }
}
