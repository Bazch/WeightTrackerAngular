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
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent,
    WeightListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService, UserWeightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
