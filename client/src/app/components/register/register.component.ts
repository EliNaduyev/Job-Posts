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
   error:string = ''
  usernameAvailable:boolean = false

  constructor(private router:Router, private mainServices:MainService) { }

  ngOnInit(): void {

  }

  onSignUp(){
      if(this.password && this.confirmPassword && this.userName && this.email){
        if(this.password === this.confirmPassword){
          if(this.email.includes('@')){
            this.mainServices.checkUser(this.userName).subscribe(respones =>{
              this.usernameAvailable = respones.msg
              if(this.usernameAvailable){
                this.error = 'This username is not available'
                setTimeout( ()=>{
                  this.error = ''
                },6000)
              }
              else{
                let newUser:NewUser = {
                  id:uuid.v4(),  
                  userName: this.userName,
                  password: this.password,
                  email: this.email
                }
                this.mainServices.addNewUser(newUser).subscribe(response =>{
                const { err } = response
                if(err){
                  this.error = err
                  setTimeout( ()=>{
                    this.error = ''
                  },6000)
                }
                else{
                  alert('User successfully added')
                  this.router.navigate(['/login']);
                }
              })
            }
          })
          }else{alert('Invalid email')}
      }
        else{
          this.error = 'Passwords are not match'
          setTimeout( ()=>{
            this.error = ''
          },6000)
        } 
      }
      else{
        this.error = 'Fill all the fields'
        setTimeout( ()=>{
          this.error = ''
        },6000)
      }
  }
}
