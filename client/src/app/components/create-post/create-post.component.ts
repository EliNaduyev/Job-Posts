import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})

export class CreatePostComponent implements OnInit {

  title:string
  body:string

  @Output() createJobPost: EventEmitter <any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
 
  }



  onChange(){
      let remainingChars = document.querySelector('#remaining-char')
      remainingChars.innerHTML =' '+ (70 -this.body.length)
  }

  onCreate(){
    if(this.title && this.body)
      this.createJobPost.emit({title:this.title, body:this.body})
    else{
      alert('Fill all the fields')
    }
  }


}
