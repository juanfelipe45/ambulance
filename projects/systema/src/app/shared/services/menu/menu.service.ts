import { Injectable } from '@angular/core';

export interface Menu {
  title: string;
  url: string;
  icon: string;
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menu: Menu[];

  constructor() {
    this.menu = [
      {title: 'Dashboard', url: '/dashboard', icon: 'dashboard'},
      {title: 'Medics', url: '/medics', icon: 'medic'},
      {title: 'Drivers', url: '/drivers', icon: 'driver'},
      {title: 'Users', url: '/users', icon: 'user'},
      {title: 'History', url: '/history', icon: 'history'},
    ];
  }

  public getItems(): Menu[] {
    return [...this.menu];
  }

  public getMenuByPath(currentPath: string): Menu {
    const menu = this.menu.find((itemMenu: Menu) => itemMenu.url === currentPath);
    return menu as Menu;
  }
}
