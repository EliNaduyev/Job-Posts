import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  jobPostArr:object[]
  counter:number = 4
  constructor(private mainServices:MainService) { }

  ngOnInit(): void {

    this.jobPostArr = this.mainServices.getJobPosts()
    
    this.mainServices.addPost({
      id:3,
      title:'Software Engineer',
      education:'Bachelor Degree',
      desc:'Looking for Full-Stack postion, i have 2 years of experience, '+
      'strong comunication skills and more!',
      email:'eli@gmail.com',
      tel:'0546336234'
    })

  //   let userTestStatus: { id: number, name: string }[] = [
  //     { "id": 0, "name": "Available" },
  //     { "id": 1, "name": "Ready" },
  //     { "id": 2, "name": "Started" }
  // ];

  //   console.log(userTestStatus)
  }
  createJobPost(data:any){
    console.log(data)
    // console.log(data.body.split(/((?:\w+ ){5})/g).filter(Boolean).join("\n"))
    // console.log('after',data.body)
    this.mainServices.addPost({
      id:this.counter,
      title:data.title,
      desc:data.body,
      tel:data.tel,
      email:data.email,
      education:data.education
    })
    this.counter++
  }

  contactJobPost(data:object){
    console.log(data)
  }
}
