import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})

export class CreatePostComponent implements OnInit {

  title:string
  body:string
  phone:string
  email:string
  education:string = 'Education'

  pubDate:Date 


  @Output() createJobPost: EventEmitter <any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    console.log('pubDate: ',this.pubDate)
  }



  onChange(){
      let remainingChars = document.querySelector('#remaining-char')
      remainingChars.innerHTML =' '+ (100 -this.body.length)
  }

  onCreate(){
    // if(this.title && this.body && this.phone && this.email && this.education !== 'Education')

    if(this.title && this.body && this.education !== 'Education')
      this.createJobPost.emit({
        title:this.title,
        body:this.body,
        tel:this.phone,
        email:this.email,
        education:this.education,
      })
    else{
      alert('Fill all the fields')
    }
  }


}
