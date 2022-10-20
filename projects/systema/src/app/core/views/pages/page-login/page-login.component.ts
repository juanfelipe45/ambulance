import { LayoutService } from './../../../../config/injections/layout/services/layout.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'amb-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.sass']
})
export class PageLoginComponent implements OnInit, OnDestroy {

  constructor(private readonly _layoutService: LayoutService) {
    // this._layoutService.setConfiguration({hideHeader: true, hideMenu: true})
    this._layoutService.configuration = {hideHeader: true, hideMenu: true}
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
      this._layoutService.configuration = {hideHeader: false, hideMenu: false}
  }
}
