import { Component, OnInit } from '@angular/core';
import { UserLift } from '../user-lift';
import { User } from '../user';
import { UserLiftDetails } from '../user-lift-details';
import { ActivatedRoute, Router } from '@angular/router';
import { UserLiftService } from '../services/user-lift.service';
import { UserLiftDetailsService } from '../services/user-lift-details.service';
import { AuthenticationService } from '../login/auth.service';
import { UserService } from '../services/user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-user-lift-add',
  templateUrl: './user-lift-add.component.html',
  styleUrls: ['./user-lift-add.component.css']
})
export class UserLiftAddComponent implements OnInit {
  listLifts:          UserLift[];
 
  user:               User;
  userName:           string;
  
  userLift:           UserLift;
  liftTitle:          string;

  userLiftDetails:    UserLiftDetails;
  liftDetailsValue:   number;
  liftDetailsReps:    number;
  liftDetailsDate:    Date;


  constructor(private route: ActivatedRoute, private router: Router, private userLiftService: UserLiftService, private userLiftDetailsService: UserLiftDetailsService, private authenticationService: AuthenticationService, private userService: UserService) { }

  ngOnInit() {
    this.userName = this.authenticationService.getLoggedInUserName();
    this.findByUsername();
  
  }

  findByUsername(){
    this.userService.findByUsername(this.userName).subscribe(
      (user: User) => (
        this.user = user,
        this.listLifts = user.userLifts
      ),
      (error: any) => (console.log(error)),
      () => {}
    )
  }

  sortDataByDate(data) {
    return data.sort((a, b) => {
      return <any>new Date(b.date) - <any>new Date(a.date);
    });
  }

  submitLiftDetails(){
    this.liftDetailsDate.setDate(this.liftDetailsDate.getDate() +1);
    var userLiftDetails: UserLiftDetails = new UserLiftDetails(this.liftDetailsValue, this.liftDetailsDate, this.liftDetailsReps, this.userLift)
    
    this.userLiftDetailsService.save(userLiftDetails).subscribe(
      (userLiftDetails: UserLiftDetails) =>{},
        (error: HttpErrorResponse) => alert("Er is een fout opgetreden: " + error.status + " " + error.error + "\n" + "\nMessage:\n" + error.message),
        () => {window.location.reload()}
      )
  }
  submitLift(){
    var userLift: UserLift = new UserLift(this.liftTitle, this.user);
    
    this.userLiftService.save(userLift).subscribe(
      (userLift: UserLift) => {},
      (error: HttpErrorResponse) => alert("Er is een fout opgetreden: " + error.status + " " + error.error + "\n" + "\nMessage:\n" + error.message),
      () => {window.location.reload()}
    )
  }
  deleteLiftDetails(userLiftDetailsId){
    this.userLiftDetailsService.delete(userLiftDetailsId).subscribe(
      (result: any) => window.location.reload(),
      (error: any) => console.log(error),
      () => { }
    )
  }
}
