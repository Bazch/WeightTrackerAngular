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
      dateTimeLabelFormats: { // don't display the dummy year
          month: '%e. %b',
          year: '%b'
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
  userweights: UserWeight[];
  
  userName: string;
  userWeightValues: number[];
  userWeightDates: Date[];
  
 
  

  constructor(private userService: UserService, private userWeightService: UserWeightService, private router: Router) { }

  ngOnInit() {  
    this.chart = Highcharts.chart("container", this.chartOptions);
  }
  
  ngOnDestroy(){
  }

  findByName(){
    var name = encodeURI(this.name);
    this.userService.findByName(name).subscribe(
      (user: User[]) => (
        this.userweights = user[0].userWeights, 
        this.user = user[0],
        this.userWeightValues = user[0].userWeights.map(u => u.value),
        this.userWeightDates = user[0].userWeights.map(u => u.date),
        this.userName = user[0].name,        
        this.updateChart()
      ),
      (error: any) => (console.log(error)),
      () => {}
    )
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
   
    this.chartOptions.title.text = this.userName;
    this.chartOptions.series[0]['data'] = dataArray;
    this.chartOptions.series[0]['name'] = 'Weight';
    this.chart = Highcharts.chart('container', this.chartOptions);
   
  }
}


