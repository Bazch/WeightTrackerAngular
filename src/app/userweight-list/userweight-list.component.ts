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
  test: number;
  user: User;

  constructor(private userService: UserService, private userWeightService: UserWeightService, private router: Router) { }

  ngOnInit() {
  }

findByName(){
  var name = encodeURI(this.name);
  this.userService.findByName(name).subscribe(
  (user: User[]) => (this.userweights = user[0].userWeights, this.user = user[0]),
  (error: any) => (console.log(error)),
  () => {}
  )
}

}
