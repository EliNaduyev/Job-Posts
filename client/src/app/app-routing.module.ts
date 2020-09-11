import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';

import { LoginComponent } from './components/login/login.component';


const routes: Routes = [  
  { path:'', component: LoginComponent },
  { path:'register', component: RegisterComponent },
  { path:'home', component: HomeComponent },
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
