import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fast-alert',
  templateUrl: './fast-alert.component.html',
  styleUrls: ['./fast-alert.component.css']
})

export class FastAlertComponent implements OnInit {
  @Input() text:string
  @Input() status:boolean

  constructor() { }

  ngOnInit(): void {
  }

  myStyle(){
    let desgin = {
      'alert-container':true,
      'alert-green-bg':this.status,
      'alert-red-bg':!this.status
    }
    return desgin
  }
}
