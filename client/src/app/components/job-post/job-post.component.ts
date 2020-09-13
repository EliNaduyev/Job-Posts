import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { getCookie } from '../../cookies'
import { MainService } from '../../services/main.service'

@Component({
  selector: 'app-job-post',
  templateUrl: './job-post.component.html',
  styleUrls: ['./job-post.component.css']
})

export class JobPostComponent implements OnInit {
  @Input() jobPost: any
  @Output() deletePost: EventEmitter <any> = new EventEmitter();
  username:string

  constructor(private mainServices:MainService) { }

  ngOnInit(): void {
    // console.log('post: ',this.jobPost.title)
    // console.log(typeof this.jobPost)
  }



  onDelete(){
    console.log('from job post component: ',this.jobPost)
    this.username = getCookie('username')
    if(this.username){
      console.log('this.jobPost.id: ',this.jobPost)

      this.deletePost.emit({id:this.jobPost.id, username:this.username })

    }
    else{
      alert('Please Login')
    }

  }

  

}
