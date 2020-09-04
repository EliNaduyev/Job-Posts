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
        title:'job 1',
        desc:'asda sda asdas'
      },
      {
        id:2,
        title:'job 2',
        desc:'sdf fsdfsdfs asdas'
      }
    ]
    return this.arr
  }

  addPost(obj:object){

    this.arr.push(obj)


  }
}
