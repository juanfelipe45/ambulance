import { Menu, MenuService } from './../../services/menu/menu.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'amb-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.sass']
})
export class TitleComponent implements OnInit {

  public itemMenu: Menu;

  constructor(
    private readonly __menuService: MenuService,
    private readonly _activatedRoute: ActivatedRoute,
  ) {
    const currentPath = "/" + this._activatedRoute.snapshot.pathFromRoot[1].routeConfig?.path;
    this.itemMenu = __menuService.getMenuByPath(currentPath);
  }

  ngOnInit(): void {
  }

}
