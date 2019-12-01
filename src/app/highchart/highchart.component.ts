import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts'

@Component({
  selector: 'app-highchart',
  template: 'highcharts-chart',
  styleUrls: ['./highchart.component.css']
})
export class HighchartComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts; // required
  chartConstructor: string = 'chart'; // optional string, defaults to 'chart'
  chartOptions: Highcharts.Options = {  }; // required
  chartCallback: Highcharts.ChartCallbackFunction = function (chart) {  } // optional function, defaults to null
  updateFlag: boolean = false; // optional boolean
  oneToOneFlag: boolean = true; // optional boolean, defaults to false
  runOutsideAngular: boolean = false; // optional boolean, defaults to false
  
  
  constructor() { }

  ngOnInit() {
  }

}
