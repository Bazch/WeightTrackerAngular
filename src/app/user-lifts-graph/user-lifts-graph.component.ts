import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { AuthenticationService } from '../login/auth.service';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserLiftService } from '../services/user-lift.service';
import { UserLift } from '../user-lift';
import { UserLiftDetails } from '../user-lift-details';
import { NgForOf } from '@angular/common';
import { map } from 'rxjs/operators';
import * as Highcharts from 'highcharts';
import { UserLiftDetailsService } from '../services/user-lift-details.service';
import { MatDialog } from '@angular/material';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-user-lifts-graph',
  templateUrl: './user-lifts-graph.component.html',
  styleUrls: ['./user-lifts-graph.component.css']
})
export class UserLiftsGraphComponent implements OnInit {

  chart: Highcharts.Chart;
  chartOptions: Highcharts.Options = {
    title: {
      text: "Progress Graph"
    },
    yAxis: {
      allowDecimals: true,
      title: {
        text: "Weight"
      }
    },
    xAxis: {
      allowDecimals: false,
      title: {
        text: "Date"
      },
      type: 'datetime',
      dateTimeLabelFormats: {
        day: '%e. %b',
        month: '%b \'%y',
        year: '%Y'
    }
  }
  };

  name: string;
  
  user: User;
  users: User[];
  userLifts: UserLift[];
  userLiftDetails: UserLiftDetails[];

  userName: string;
  

  constructor(private userService: UserService, private userLiftService: UserLiftService, 
              private userLiftDetailsService: UserLiftDetailsService, private authenticationService: AuthenticationService, 
              private router: Router, public dialog: MatDialog){                
  }

  ngOnInit() {
    this.userName = this.authenticationService.getLoggedInUserName();
    this.chart = Highcharts.chart("container", this.chartOptions);
    this.findByUsername();
  }


  findByUsername(){
    this.userService.findByUsername(this.userName).subscribe(
      (user: User) => (
        this.userLifts = user.userLifts,
        this.user = user,
        this.updateChart()
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

  updateChart(){
    while(this.chart.series.length > 0)
    this.chart.series[0].remove(true);
    this.chartOptions.title.text = this.user.name;
    for (let i in this.userLifts) {
      const dataArray = [];
      var userLiftDetails = this.userLifts[i].liftDetails;
      this.sortDataByDate(userLiftDetails);
      for(let j in userLiftDetails){       
        var dt = new Date(userLiftDetails[j].date)
        var year = dt.getFullYear();
        var month = dt.getMonth();
        var day = dt.getDate(); 
      
        dataArray.push([Date.UTC(year, month, day), userLiftDetails[j].value]);
      }
      this.chart.addSeries({                        
        name: this.userLifts[i].title,
        type: 'line',
        data: dataArray
    }, false);
  }  
  this.chart.redraw();
}

deleteLiftDetails(userLiftDetailsId:number) {
  this.userLiftDetailsService.delete(userLiftDetailsId).subscribe(
    (result: any) => this.findByUsername(),
    (error: any) => console.log(error),
    () => { }
  )
}

deleteLift(userLiftId:number) {
  this.userLiftService.delete(userLiftId).subscribe(
    (result: any) => this.findByUsername(),
    (error: any) => console.log(error),
    () => { }
  )
}

openDialog(id: number): void {
  const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
    width: '350px',
    data: "Are you sure you want to delete this data?"
  });
  dialogRef.afterClosed().subscribe(result => {
    if(result) {
      this.deleteLift(id);
    }
  });
}


}
