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
  status:boolean
  alertText:string
  constructor(private mainServices:MainService, private router:Router) { }

  ngOnInit(): void {
    console.log('home component rendered!')
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
    document.location.reload();
  }

  createJobPost(data:any){
    this.mainServices.addPost({
      title:data.title,
      desc:data.body,
      tel:data.tel,
      email:data.email,
      education:data.education,
      date:data.pubDate,
      username:data.username
    }).subscribe(response =>{  //without subscribe the request will not work!

      console.log('response: ',response)
      if(response.status){
        this.mainServices.getJobPosts().subscribe(response =>{
          console.log('array of posts refreshed')
          this.jobPostArr = response
        })
        // alert(response.msg)

      }
      else{alert(response.msg)}
    })
  }

  deletePost(data:object){
    console.log(data)
    this.mainServices.deletePost(data).subscribe(response =>{
      console.log('after deleteing: ',response)
      if(response.status){
        alert("Post deleted!")
        this.mainServices.getJobPosts().subscribe(response =>{
          console.log('array of posts refreshed')
          this.jobPostArr = response
        })
      }else alert("You can't delete others users posts!")
    })
  }
}
