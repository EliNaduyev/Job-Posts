import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { getCookie } from '../cookies'

@Injectable({
  providedIn: 'root'
})

export class MainService {
  arr:object[]
  END_POINT:string = 'http://localhost:3000'

  constructor(private http:HttpClient) { }

  auth(cookieName:string):boolean{
    let userCookie = getCookie(cookieName)
    if(userCookie){
      return true
    }
    else{
      return false
    }
  }

  // ----------- users function -----------
  addNewUser(newUser:object):Observable<any>{
    return this.http.post<any>(this.END_POINT+'/adduser',newUser)
  }

  getUser(userData:object):Observable<any>{
    return this.http.post<any>(this.END_POINT+`/getuser`,userData)
  }

  checkUser(username:string):Observable<any>{
    // in http request the data is MUST be JSON object
    return this.http.post<any>(this.END_POINT+`/checkuser`,{username})  
  }

  // ----------- post function -----------

  getJobPosts():Observable<object[]> {
    return this.http.get<object[]>(this.END_POINT+'/allposts')
  }

  addPost(obj:object):Observable<any>{
    console.log('add post btn was clicked')
    return this.http.post<any>(this.END_POINT+'/addpost', obj)
  }

  deletePost(userData:object):Observable<any>{
    console.log('making delete post services: ',userData)
    return this.http.post<any>(this.END_POINT+'/deletepost',userData)
  }
}
