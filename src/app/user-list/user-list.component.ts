import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../user';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { UserWeight } from '../user-weight';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {

  users: User[];
 
  constructor(private userService: UserService, private router: Router) {
  }
 
  ngOnInit() {
    this.userService.findAll().subscribe(
      (data: User[]) => this.users = data, 
      (error: any) => console.log(error), 
      () => console.log()
    )    
  }
  
  ngOnDestroy(){
    console.log("In user-list")
  }

  deleteUser(userId:number) {
    this.userService.delete(userId).subscribe(
      (result: any) => this.ngOnInit(),
      (error: any) => console.log(error),
      () => { }
    )
  }
   

}
