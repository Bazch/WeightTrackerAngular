import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../login/auth.service';
import { UserService } from '../services/user.service';
import { User } from '../user';
import { UserLift } from '../user-lift';
import { UserLiftDetails } from '../user-lift-details';
import { HttpErrorResponse } from '@angular/common/http';
import { UserLiftDetailsService } from '../services/user-lift-details.service';
import { UserLiftService } from '../services/user-lift.service';

@Component({
  selector: 'app-user-lifts',
  templateUrl: './user-lifts.component.html',
  styleUrls: ['./user-lifts.component.css']
})
export class UserLiftsComponent implements OnInit {
  
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

}
