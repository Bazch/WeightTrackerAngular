import { Component, OnInit } from '@angular/core';
import { UserWeight } from '../user-weight';
import { ActivatedRoute, Router } from '@angular/router';
import { UserWeightService } from '../services/user-weight.service';
import { User } from '../user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-weight-list',
  templateUrl: './weight-list.component.html',
  styleUrls: ['./weight-list.component.css']
})
export class WeightListComponent{

  userweight: UserWeight;
  users: User[]

  constructor(private route: ActivatedRoute, private router: Router, private userWeightService: UserWeightService, private userService: UserService) 
    { this.userweight = new UserWeight(); }

  onSubmit() {
    this.userWeightService.save(this.userweight).subscribe(result => this.gotoUserList());
  }

  ngOnInit() {
    this.userService.findAll().subscribe(
      (data: any) => this.users = data, 
      (error: any) => console.log(error), 
      () => console.log("Gereed"))
    }

  gotoUserList() {
    this.router.navigate(['/weights']);
  }

}
