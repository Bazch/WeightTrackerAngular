import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { WeightListComponent } from './weight-list/weight-list.component';
import { UserweightListComponent } from './userweight-list/userweight-list.component';
import { LoginComponent } from './login/login.component';
import { CVComponent } from './cv/cv.component';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';
import { NoAuthGuardService as AuthGuard} from './services/no-auth-guard.service';


const routes: Routes = [
  { path: 'users', 
  component: UserListComponent,
  canActivate: [AuthGuard]
},
  { path: 'adduser', component: UserFormComponent },
  { path: 'addweight', 
    component: WeightListComponent,
    canActivate: [AuthGuard]},
  { path: 'weights', 
    component: UserweightListComponent,
    canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'cv', component: CVComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'home', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
