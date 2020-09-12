import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { TimeObject } from '../../models/timeObject'
import { stringify } from '@angular/compiler/src/util';
import { MainService } from '../../services/main.service'



@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})

export class CreatePostComponent implements OnInit {
  @Output() createJobPost: EventEmitter <any> = new EventEmitter();

  title:string
  body:string
  phone:string
  email:string
  education:string = 'Education'
  pubDate:string



  constructor(private mainServices:MainService) { }

  ngOnInit(): void {
    const loginAlert = document.querySelector('.alert-container') as HTMLElement;

    window.onclick = function(event) {
      if (event.target == loginAlert) {
        loginAlert.style.display = "none"
        console.log('clicked on window')
      }
      else{
        console.log('cant find login alert')
      }
    }


  }

    makeDate() {
      let date = new Date()
      return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
    }

    onChange(){
      let remainingChars = document.querySelector('#remaining-char')
      remainingChars.innerHTML =' '+ (100 -this.body.length)
    }

    onCreate(){
    // if(this.title && this.body && this.phone && this.email && this.education !== 'Education')
     


    if(this.mainServices.auth('id')){
      this.pubDate = this.makeDate()
      console.log(typeof this.phone)
      if(this.phone){
        if(this.phone.toString().length >= 9 && this.phone.toString().length <= 10){
          if(this.title && this.body && this.education !== 'Education' && this.email){
            this.createJobPost.emit({
              title:this.title,
              body:this.body,
              tel:this.phone,
              email:this.email,
              education:this.education,
              pubDate:this.pubDate
            })
          }
          else{
            alert('Fill all the fields')
          }
        }
        else{
          alert('Phone must contain 9 or 10 digits')
        }
      }
      else{
        alert('Fill phone field')
      }
    }
    else{
      const loginAlert = document.querySelector('.alert-container') as HTMLElement;

      loginAlert.style.display = "flex";
    }

    
      
    }


}
