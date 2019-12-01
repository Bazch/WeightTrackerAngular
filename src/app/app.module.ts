import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { UserService } from './services/user.service';
import { WeightListComponent } from './weight-list/weight-list.component';
import { UserWeightService } from './services/user-weight.service';
import { UserweightListComponent } from './userweight-list/userweight-list.component';
import { MatRadioModule } from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartModule } from 'angular-highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import { HighchartComponent } from './highchart/highchart.component';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent,
    WeightListComponent,
    UserweightListComponent,
    HighchartComponent
  ],
  imports: [
    BrowserModule,
    HighchartsChartModule,
    ChartModule,
    MatRadioModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [UserService, UserWeightService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
