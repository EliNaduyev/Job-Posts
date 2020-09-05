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
        desc:'Looking for new postion, i have 2 years of experience, '+
        'strong comunication skills and more!',
        email:'adi@gmail.com',
        tel:'054676234',
        date:'12/8/2018'
      },
      {
        id:2,
        title:'Machine Learning',
        education:"PhD Degree",
        desc:'sdf fsdfsdfs asdas',
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
