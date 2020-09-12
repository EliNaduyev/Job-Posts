import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-alert',
  templateUrl: './login-alert.component.html',
  styleUrls: ['./login-alert.component.css']
})
export class LoginAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const loginAlert = document.querySelector('.alert-container') as HTMLElement;
    window.onclick = function(event) {
      if (event.target == loginAlert) {
        loginAlert.style.display = "none";
        console.log('clicked on window')
      }
      else{
        console.log('cant find login alert')
      }
    }
    // const loginAlert = document.querySelector('.alert-container') as HTMLElement;
    // window.onclick = function(event) {
    //   if (event.target == loginAlert) {
    //     loginAlert.style.display = "none";
    //     console.log('clicked on window')
    //   }
    // }

  }
  closeAlert(){
    const loginAlert = document.querySelector('.alert-container') as HTMLElement;
    loginAlert.style.display = "none";
  }




}
