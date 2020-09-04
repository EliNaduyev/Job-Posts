import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  test:object 
  arr:object[]

  constructor(private mainServices:MainService) { }

  ngOnInit(): void {

    this.arr = this.mainServices.getJobPosts()
    console.log(this.arr)

  //   let userTestStatus: { id: number, name: string }[] = [
  //     { "id": 0, "name": "Available" },
  //     { "id": 1, "name": "Ready" },
  //     { "id": 2, "name": "Started" }
  // ];

  //   console.log(userTestStatus)
  }

}
