import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'amb-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {

  @Output() private eventToggleMenu: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  public toggleMenu(): void {
    this.eventToggleMenu.emit();
  }

}
