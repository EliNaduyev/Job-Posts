import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  jobPostArr:object[]
  constructor(private mainServices:MainService) { }

  ngOnInit(): void {

    this.mainServices.getJobPosts().subscribe(response =>{

      console.log('response: ',response)
      this.jobPostArr = response

    })
  }

  createJobPost(data:any){
    this.mainServices.addPost({
      title:data.title,
      desc:data.body,
      tel:data.tel,
      email:data.email,
      education:data.education,
      date:data.pubDate
    }).subscribe(response =>{     //without subscribe the request will not work!
      console.log('response: ',response)
    })
  }

  contactJobPost(data:object){
    console.log(data)
  }

  makeHTTP(){
    console.log('btn was clicked')
    // if i dont use subscribe the request will not be sent
    this.mainServices.makeSimpleHttp().subscribe(test =>{  
      console.log('test: ',test)
    })
  }



}
