import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { WeightListComponent } from './weight-list/weight-list.component';
import { UserWeightService } from './services/user-weight.service';
import { UserweightListComponent } from './userweight-list/userweight-list.component';
import { ChartModule } from 'angular-highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import { HighchartComponent } from './highchart/highchart.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './login/auth.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { CVComponent } from './cv/cv.component';
import { BasicAuthInterceptorService } from './services/basic-auth-interceptor.service';
import { LogoutComponent } from './logout/logout.component';
import { ExistingEmailValidator } from './custom-validators/existing-email-validator';
import { MaterialModule } from './material.module';
import { HomeComponent } from './home/home.component';
import { ExistingUsernameValidator } from './custom-validators/existing-username-validator';
import { NoAuthGuardService } from './services/no-auth-guard.service';
import { UserLiftsComponent } from './user-lifts/user-lifts.component';
import { UserLiftDetailsService } from './services/user-lift-details.service';
import { UserLiftService } from './services/user-lift.service';
import { UserLiftsGraphComponent } from './user-lifts-graph/user-lifts-graph.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { UserLiftAddComponent } from './user-lift-add/user-lift-add.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent,
    WeightListComponent,
    UserweightListComponent,
    HighchartComponent,
    LoginComponent,
    CVComponent,
    LogoutComponent,
    HomeComponent,
    ExistingEmailValidator,
    ExistingUsernameValidator,
    UserLiftsComponent,
    UserLiftsGraphComponent,
    ConfirmationDialogComponent,
    UserLiftAddComponent
  ],
  imports: [
    BrowserModule,
    HighchartsChartModule,
    MaterialModule,
    ChartModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    MDBBootstrapModule.forRoot(),
    NgxExtendedPdfViewerModule
  ],
  entryComponents: [
    ConfirmationDialogComponent
  ],
  providers: [UserService, UserWeightService, UserLiftService, UserLiftDetailsService, AuthenticationService, BasicAuthInterceptorService, NoAuthGuardService,
    {provide: HTTP_INTERCEPTORS,
    useClass: BasicAuthInterceptorService,
    multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
