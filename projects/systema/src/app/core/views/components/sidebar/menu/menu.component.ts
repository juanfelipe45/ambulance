import { Menu, MenuService } from './../../../../../shared/services/menu/menu.service';
import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'amb-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class MenuComponent implements OnInit {
  public menu: Menu[];

  @Output() private eventToggleMenu: EventEmitter<void> = new EventEmitter<void>();

  constructor(private readonly _menuService: MenuService) {
    this.menu = _menuService.getItems();
  }

  ngOnInit(): void {
  }

  public toggleMenu(): void {
    this.eventToggleMenu.emit();
  }

}
