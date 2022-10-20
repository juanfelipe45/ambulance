import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'amb-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.sass']
})
export class ConfirmComponent implements OnInit {

  public messageToConfirm = 'Are you sure?';

  constructor() { }

  ngOnInit(): void {
  }

}
