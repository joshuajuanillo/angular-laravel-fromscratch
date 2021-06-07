import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/auth.guard';

import { SigninComponent } from './backend/login/signin/signin.component';
import { SignupComponent } from './backend/login/signup/signup.component';
import { DashboardComponent } from './backend/dashboard/dashboard.component';
import { LandingPageComponent } from './frontend/landing-page/landing-page.component';
import { RegisterComponent } from './frontend/register/register.component';


const routes: Routes = [
  { path: '', component:LandingPageComponent,children: [
    { path: 'register', component:RegisterComponent },
    ]
  },

  { path: 'signin', component:SigninComponent },

  /******************************
   * DASHBOARD
  ******************************/

 { path: 'dashboard',children: [
  { path: '', component: DashboardComponent },
  ],canActivate: [AuthGuard],
 },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
