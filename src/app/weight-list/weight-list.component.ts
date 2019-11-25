import { Component, OnInit } from '@angular/core';
import { UserWeight } from '../user-weight';
import { ActivatedRoute, Router } from '@angular/router';
import { UserWeightService } from '../services/user-weight.service';
import { User } from '../user';
import { UserService } from '../services/user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-weight-list',
  templateUrl: './weight-list.component.html',
  styleUrls: ['./weight-list.component.css']
})
export class WeightListComponent{

  userweight: UserWeight;
  users: User[];
  userweightUser: User;
  userweightValue: number;


  constructor(private route: ActivatedRoute, private router: Router, private userWeightService: UserWeightService, private userService: UserService) 
    {}

  onSubmit() {
    var userWeight: UserWeight = new UserWeight(this.userweightValue, this.userweightUser)
    this.userWeightService.save(userWeight).subscribe(
      (userWeight: UserWeight) =>{},
        (error: HttpErrorResponse) => alert("Er is een fout opgetreden: " + error.status + " " + error.error + "\n" + "\nMessage:\n" + error.message),
        () => {this.gotoWeightList();}
      )
  }

  ngOnInit() {
    this.userService.findAll().subscribe(
      (data: any) => this.users = data, 
      (error: any) => console.log(error), 
      () => console.log("Gereed"))
    }

  gotoWeightList() {
    this.router.navigate(['/weights']);
  }
 
 
  get diagnostic() { return JSON.stringify(this.userweight); }
}
