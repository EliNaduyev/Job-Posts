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
    this.auth = this.mainServices.auth('id')
    this.username = getCookie('username')
    this.mainServices.getJobPosts().subscribe(response =>{
      this.jobPostArr = response
    })
  }

  makeAlert(text:string, status:boolean, time:number){
    let alert = document.querySelector('.alert-container') as HTMLElement
    alert.classList.add("alert-container-show")
    this.status = status
    this.alertText = text
    setTimeout( ()=>{
      alert.classList.remove('alert-container-show')
    },time)
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

      if(response.status){
        this.mainServices.getJobPosts().subscribe(response =>{
          this.jobPostArr = response
          this.makeAlert('Post Added!', true, 3000)
        })
      } else{this.makeAlert(response.msg, false, 6000)}
    })
  }

  deletePost(data:object){
    this.mainServices.deletePost(data).subscribe(response =>{
      if(response.err){alert(response.err)}
      else{
        if(response.status){
          this.makeAlert("Post Deleted!", true, 3000)
          this.mainServices.getJobPosts().subscribe(response =>{
            this.jobPostArr = response
          })
        } else this.makeAlert("You can't delete others users posts!", false, 5000)
      }
    })
  }
}
