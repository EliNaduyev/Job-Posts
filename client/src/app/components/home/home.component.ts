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

    this.mainServices.getJobPosts().subscribe(response =>{

      console.log('response: ',response)
      this.jobPostArr = response

    })
    
    // this.mainServices.addPost({
    //   id:3,
    //   title:'Software Engineer',
    //   education:'Bachelor Degree',
    //   desc:'Looking for Full-Stack postion, has two years of experience, '+
    //   'strong communication skills and more!',
    //   email:'jonsnow@gmail.com',
    //   tel:'0546336234',
    //   date:'6/3/2020'
    // })


  }

  createJobPost(data:any){
    // console.log(data)
    // console.log(data.body.split(/((?:\w+ ){5})/g).filter(Boolean).join("\n"))
    // console.log('after',data.body)
    this.mainServices.addPost({
      id:this.counter,
      title:data.title,
      desc:data.body,
      tel:data.tel,
      email:data.email,
      education:data.education,
      date:data.pubDate
    }).subscribe(response =>{     //without subscribe the request will not work!
      console.log('response: ',response)
    })
    this.counter++
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
