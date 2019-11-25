import { Component, OnInit } from '@angular/core';
import { UserWeightService } from '../services/user-weight.service';
import { UserService } from '../services/user.service';
import { User } from '../user';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserWeight } from '../user-weight';

@Component({
  selector: 'app-userweight-list',
  templateUrl: './userweight-list.component.html',
  styleUrls: ['./userweight-list.component.css']
})
export class UserweightListComponent implements OnInit {

  userweights: UserWeight[];
  name: string;

  constructor(private userService: UserService, private userWeightService: UserWeightService, private router: Router) { }

  ngOnInit() {
  }

findByName(){
  var name = encodeURI(this.name);
    console.log(name);
    this.userWeightService.findByUserName(name).subscribe(
      (userweights: UserWeight[]) => this.userweights = userweights,
      (error: HttpErrorResponse) => alert("Er is een fout opgetreden: " + error.status + " " + error.error + "\n" + "\nMessage:\n" + error.message),
      () => {} 
    )
}

gotoWeightList() {
  this.router.navigate(['/weights']);
}

}
