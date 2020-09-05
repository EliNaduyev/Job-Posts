import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  arr:object[]
  constructor() { }

  getJobPosts() {
     this.arr = [
      {
        id:1,
        title:'Human Resources',
        education:"Master's Degree",
        desc:'Looking for a new postion, with 3 years of experience as a'+ 
        ' CEO at Google, I have managed 2 HR teams under me, prefers'+ 
        ' managerial position.',
        email:'adi@gmail.com',
        tel:'054676234',
        date:'12/8/2020'
      },
      {
        id:2,
        title:'Machine Learning',
        education:"PhD Degree",
        desc:'Looking for my next challenge in the world of machine learning' +
        ' and artificial intelligence with 8 years of teaching experience and 5 years of practical work.',
        email:'tomer@gmail.com',
        tel:'054894234',
        date:'15/6/2020'
      }
    ]
    return this.arr
  }

  addPost(obj:object){

    this.arr.push(obj)


  }
}
