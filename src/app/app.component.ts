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
    location.reload;
    this.isLoggedIn = this.authenticationService.isUserLoggedIn();
  }
  handleLogout(){
    this.authenticationService.logout();
    this.router.navigate(['logout']);
  }
}
