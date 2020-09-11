import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error-msg',
  templateUrl: './error-msg.component.html',
  styleUrls: ['./error-msg.component.css']
})

export class ErrorMsgComponent implements OnInit {
  @Input() errorText: string

  constructor() { }

  ngOnInit(): void {
  }

}
