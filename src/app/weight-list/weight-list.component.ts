import { Component, OnInit } from '@angular/core';
import { UserWeight } from '../user-weight';
import { ActivatedRoute, Router } from '@angular/router';
import { UserWeightService } from '../services/user-weight.service';
import { User } from '../user';
import { UserService } from '../services/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthenticationService } from '../login/auth.service';

@Component({
  selector: 'app-weight-list',
  templateUrl: './weight-list.component.html',
  styleUrls: ['./weight-list.component.css']
})
export class WeightListComponent{

  userDate: Date;
  userweight: UserWeight;
  user: User;
  userweightValue: number;
  userName: string;



  constructor(private route: ActivatedRoute, private router: Router, private userWeightService: UserWeightService, private authenticationService: AuthenticationService, private userService: UserService) 
    {}

  onSubmit() {
    this.userDate.setDate(this.userDate.getDate() +1);
    var userWeight: UserWeight = new UserWeight(this.userweightValue, this.user, this.userDate)
    this.userWeightService.save(userWeight).subscribe(
      (userWeight: UserWeight) =>{},
        (error: HttpErrorResponse) => alert("Er is een fout opgetreden: " + error.status + " " + error.error + "\n" + "\nMessage:\n" + error.message),
        () => {this.gotoWeightList();}
      )
  }

  ngOnInit() {
    this.userName = this.authenticationService.getLoggedInUserName();
    this.findByUsername();
  }

findByUsername(){
    this.userService.findByUsername(this.userName).subscribe(
      (user: User) => (
        this.user = user
      ),
      (error: any) => (console.log(error)),
      () => {}
    )
  }

  gotoWeightList() {
    this.router.navigate(['/weights']);
  }
 
 
  get diagnostic() { return JSON.stringify(this.userweight); }
}
