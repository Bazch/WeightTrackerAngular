import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  isLoggedIn = false;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) {
    this.title = 'Weight Tracker';
  }

  ngOnInit() {
    this.isLoggedIn = this.authenticationService.isUserLoggedIn();
    console.log('Logged in ' + this.isLoggedIn + " " + 'User: ' + sessionStorage.getItem(this.authenticationService.USER_NAME_SESSION_ATTRIBUTE_NAME));
  }
  handleLogout(){
    this.authenticationService.logout();
  }
}
