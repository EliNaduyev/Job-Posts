import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() { }

  getJobPosts() {
    return [
      {
        title:'job 1',
        desc:'asda sda asdas'
      },
      {
        title:'job 2',
        desc:'sdf fsdfsdfs asdas'
      }
    ]
  }
}
