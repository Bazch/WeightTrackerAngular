import { Component, OnInit, Optional, Input, OnDestroy } from '@angular/core';
import { UserWeightService } from '../services/user-weight.service';
import { UserService } from '../services/user.service';
import { User } from '../user';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserWeight } from '../user-weight';
import { Chart, Options } from 'highcharts';
import { first } from 'rxjs/operators';
import * as _ from 'lodash';
import * as Highcharts from 'highcharts';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../login/auth.service';

@Component({
  selector: 'app-userweight-list',
  templateUrl: './userweight-list.component.html',
  styleUrls: ['./userweight-list.component.css']
})
export class UserweightListComponent implements OnInit, OnDestroy{
 
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
  },
  
    series: [{
      data: [],
      type: 'line',
      name: ""
    }]
  };

  name: string;
  
  user: User;
  users: User[];
  userweights: UserWeight[];
  
  userName: string;
  userWeightValues: number[];
  userWeightDates: Date[];
  
 
  

  constructor(private userService: UserService, private userWeightService: UserWeightService, private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {  
    this.chart = Highcharts.chart("container", this.chartOptions);
    this.userName = this.authenticationService.getLoggedInUserName()
    this.findByUsername();
  }
  
  ngOnDestroy(){
  }

  findByUsername(){
    this.userService.findByUsername(this.userName).subscribe(
      (user: User) => (
        this.userweights = user.userWeights, 
        this.sortDataByDate(this.userweights),
        this.user = user,
        this.userWeightValues = user.userWeights.map(u => u.value),
        this.userWeightDates = user.userWeights.map(u => u.date),
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
    const dataArray = [];
    for (let i in this.userWeightValues) {
      var dt = new Date(this.userWeightDates[i])
      var year = dt.getFullYear();
      var month = dt.getMonth();
      var day = dt.getDate(); 
      
      dataArray.push([Date.UTC(year, month, day), this.userWeightValues[i]]);
     
    }
    
    this.chartOptions.title.text = this.user.name;
    this.chartOptions.series[0]['data'] = dataArray;
    this.chartOptions.series[0]['name'] = 'Weight';
    this.chart = Highcharts.chart('container', this.chartOptions);
  }
  
  deleteUserWeight(userWeightId:number) {
    this.userWeightService.delete(userWeightId).subscribe(
      (result: any) => this.findByUsername(),
      (error: any) => console.log(error),
      () => { }
    )
  }


}


