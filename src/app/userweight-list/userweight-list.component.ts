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

@Component({
  selector: 'app-userweight-list',
  templateUrl: './userweight-list.component.html',
  styleUrls: ['./userweight-list.component.css']
})
export class UserweightListComponent implements OnInit, OnDestroy{
 
  userweights: UserWeight[];
  name: string;
  test: number;
  user: User;
  userWeightValues: number[];
 
  Highcharts: typeof Highcharts = Highcharts;
  chart: Highcharts.Chart;
  chartOptions: Highcharts.Options = {
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
      }
    },
    series: [{
      data: [],
      type: 'line'
    }]
  };

  constructor(private userService: UserService, private userWeightService: UserWeightService, private router: Router) { }

  ngOnInit() {  
  }
  
  ngOnDestroy(){
    // this.chart.destroy();
  }

  findByName(){
    var name = encodeURI(this.name);
    this.userService.findByName(name).subscribe(
      (user: User[]) => (
        this.userweights = user[0].userWeights, 
        this.user = user[0],
        this.userWeightValues = user[0].userWeights.map(u => u.value)
      ),
      (error: any) => (console.log(error)),
      () => {}
    )
  }

  updateChart(){
    this.chartOptions.series[0]['data'] = this.userWeightValues,
    this.chart = Highcharts.chart('container', this.chartOptions);
  }

  deleteChart(){
    this.chart.destroy();

  }
}


