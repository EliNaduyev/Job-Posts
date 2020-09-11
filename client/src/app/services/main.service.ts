import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MainService {
  arr:object[]
  END_POINT:string = 'http://localhost:3000'

  constructor(private http:HttpClient) { }

  // ----------- users function -----------
  addNewUser(newUser:object):Observable<object>{
    return this.http.post<object>(this.END_POINT+'/adduser',newUser)
  }

  getUser(userData:object):Observable<any>{
    return this.http.post<any>(this.END_POINT+`/getuser`,userData)
  }

  // ----------- post function -----------

  getJobPosts():Observable<object[]> {
    return this.http.get<object[]>(this.END_POINT+'/allposts')
  }

  addPost(obj:object):Observable<any>{
    // this.arr.unshift(obj)
    console.log('add post btn was clicked')
    console.log(obj)
    return this.http.post<any>(this.END_POINT+'/addpost', obj)
  }

  makeSimpleHttp():Observable<any>{
    console.log('making HTTP in services')
    return this.http.get<any>(this.END_POINT+'/users')

    // return this.http.post<any>(this.END_POINT+'/post',{data:'data from angular'})

  }
}
