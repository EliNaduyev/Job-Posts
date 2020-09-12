import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service'
import { getCookie, deleteCookie } from '../../cookies'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  jobPostArr:object[]
  username:string
  auth:boolean = false

  constructor(private mainServices:MainService, private router:Router) { }

  ngOnInit(): void {
    this.auth = this.mainServices.auth('id')
    this.username = getCookie('username')
    this.mainServices.getJobPosts().subscribe(response =>{

      console.log('response: ',response)
      this.jobPostArr = response

    })
  }


  onLogout():void{
    deleteCookie('id')
    deleteCookie('username')
    this.router.navigate(['']);
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
