import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-job-post',
  templateUrl: './job-post.component.html',
  styleUrls: ['./job-post.component.css']
})
export class JobPostComponent implements OnInit {
  @Input() jobPost: any
  @Output() contactJobPost: EventEmitter <any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log('post: ',this.jobPost.title)
    console.log(typeof this.jobPost)
  }

  onContact(){
    this.contactJobPost.emit({id:this.jobPost.id, second:'second argument'})
  }

}
