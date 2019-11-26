import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import {MatRadioModule} from '@angular/material/radio'; 


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  user: User;
  sexArray: string[] = ['M', 'V'];

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) 
    { this.user = new User(); }

  onSubmit() {
    this.userService.save(this.user).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/users']);
  }
}