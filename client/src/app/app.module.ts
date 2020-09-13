import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { JobPostComponent } from './components/job-post/job-post.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorMsgComponent } from './components/error-msg/error-msg.component';
import { LoginAlertComponent } from './components/login-alert/login-alert.component';
import { FastAlertComponent } from './components/fast-alert/fast-alert.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CreatePostComponent,
    JobPostComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    ErrorMsgComponent,
    LoginAlertComponent,
    FastAlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
