import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit, OnDestroy {

  constructor(private router: Router) { }
  ngOnDestroy(){
  window.location.reload(); 
  }
  ngOnInit() {
    this.goNext();
  }
  goNext(){
   
    setTimeout(() => {
        this.router.navigate(['home'])
      }, 1000);
}
}
