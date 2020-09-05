import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { TimeObject } from '../../models/timeObject'
import { stringify } from '@angular/compiler/src/util';
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

  // timeObj: Partial <TimeObject> = {};
  
  pubDate:string

  constructor() { }

  ngOnInit(): void {

    // console.log(this.pubDate)


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
    this.pubDate = this.makeDate()

    if(this.title && this.body && this.education !== 'Education')
      this.createJobPost.emit({
        title:this.title,
        body:this.body,
        tel:this.phone,
        email:this.email,
        education:this.education,
        pubDate:this.pubDate
      })
    else{
      alert('Fill all the fields')
    }
  }


}
