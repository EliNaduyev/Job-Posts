import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewUser } from '../../models/registerObj'
import * as uuid from 'uuid';
import { MainService } from '../../services/main.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
   userName:string
   password:string
   confirmPassword:string
   email:string


  constructor(private router:Router, private mainServices:MainService) { }

  ngOnInit(): void {
    // const myId = uuid.v4();
    // console.log( typeof myId)
  }

  onSignUp(){


    if(this.password == this.confirmPassword){
      let newUser:NewUser = {
        id:uuid.v4(),  
        userName: this.userName,
        password: this.password,
        email: this.email
      }
      console.log(newUser)
      this.mainServices.addNewUser(newUser).subscribe(response =>{

        console.log('response: ',response)
        console.log('type of response: ',typeof response)
      })

      

      // this.router.navigate(['']);
    }
    else{
      alert('Passwords are not match')
    } 
  }
}
