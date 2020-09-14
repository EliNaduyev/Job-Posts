import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { setCookie } from '../../cookies'
import { MainService } from '../../services/main.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  userName:string
  password:string
  error:string = ''
  constructor(private router:Router, private mainServices:MainService) { }

  ngOnInit(): void {
  }

  onLogin(){
    this.mainServices.getUser({username: this.userName,pass: this.password}).subscribe(response => {
      const { err } = response
      if(err){
        console.log(err)
        this.error = err
        setTimeout( ()=>{
          this.error = ''
        },6000)
      }
      else{
        if(response.data){
  
          const { user_name, user_id } = response.data
          setCookie('id', user_id ,2)
          setCookie('username', user_name ,2)
          this.router.navigate(['/home']);
        }
      }
    })

  }

}
