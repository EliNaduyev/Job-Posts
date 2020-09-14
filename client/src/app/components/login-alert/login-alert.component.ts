import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-alert',
  templateUrl: './login-alert.component.html',
  styleUrls: ['./login-alert.component.css']
})
export class LoginAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const loginAlert = document.querySelector('.login-alert-container') as HTMLElement;
    window.onclick = function(event) {
      if (event.target == loginAlert) {
        loginAlert.style.display = "none";
      }
    }
  }
  
  closeAlert(){
    const loginAlert = document.querySelector('.login-alert-container') as HTMLElement;
    loginAlert.style.display = "none";
  }
}
