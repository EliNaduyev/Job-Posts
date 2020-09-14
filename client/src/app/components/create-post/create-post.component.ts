import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { MainService } from '../../services/main.service'
import { getCookie } from '../../cookies'


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
  }

    makeDate() {
      let date = new Date()
      return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
    }

    onChange(){
      let remainingChars = document.querySelector('#remaining-char')
      remainingChars.innerHTML =' '+ (150 -this.body.length)
    }

  onCreate(){
    if(this.mainServices.auth('id')){
      this.pubDate = this.makeDate()
      if(this.phone){
        if(this.phone.toString().length >= 9 && this.phone.toString().length <= 10){
          if(this.title && this.body && this.education !== 'Education' && this.email){
            if(this.email.includes('@')){
              this.createJobPost.emit({
                title:this.title,
                body:this.body,
                tel:this.phone,
                email:this.email,
                education:this.education,
                pubDate:this.pubDate,
                username: getCookie('username')
              })
            }
            else alert('Invalid email')
          }
          else{alert('Fill all the fields')}
        }
        else{alert('Phone must contain 9 or 10 digits')}
      }
      else{alert('Fill phone field')}
    }
    else{
      const loginAlert = document.querySelector('.login-alert-container') as HTMLElement;
      loginAlert.style.display = "flex";
    }
  }
}
