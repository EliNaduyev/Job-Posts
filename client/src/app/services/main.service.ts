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

  // getJobPosts() {
  //    this.arr = [
  //     {
  //       id:1,
  //       title:'Human Resources',
  //       education:"Master's Degree",
  //       desc:'Looking for a new postion, with 3 years of experience as a'+ 
  //       ' CEO at Google, I have managed 2 HR teams under me, prefers'+ 
  //       ' managerial position.',
  //       email:'adi@gmail.com',
  //       tel:'0546762334',
  //       date:'12/8/2020'
  //     },
  //     {
  //       id:2,
  //       title:'Machine Learning',
  //       education:"PhD Degree",
  //       desc:'Looking for my next challenge in the world of machine learning' +
  //       ' and artificial intelligence with 8 years of teaching experience and 5 years of practical work.',
  //       email:'tomer@gmail.com',
  //       tel:'054894234',
  //       date:'15/6/2020'
  //     }
  //   ]
  //   return this.arr
  // }

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
