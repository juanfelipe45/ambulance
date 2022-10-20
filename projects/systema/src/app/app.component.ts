import { LayoutService } from './config/injections/layout/services/layout.service';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

import * as $ from 'jquery';
import { iLayout } from './config/injections/layout/interfaces/layout.interface';

@Component({
  selector: 'amb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {

  public isOpened;
  public layoutOptions!: iLayout;
  public country: {name: string, flag: string};

  private userActivity: any;
  private userInactive: Subject<any>;

  constructor(
    private readonly _router: Router,
    private readonly _location: Location,
    private readonly _layoutService: LayoutService,
  ) {
    this.isOpened = false;
    this.userActivity = 0;
    this.userInactive = new Subject();
    this.country = {name: '', flag: ''};
    // this.layoutOptions = {hideHeader: false, hideMenu: false};
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.setTimeout();
    this.getCountry();
    // this.reloadPathAfterRefresh();
    this.getConfigurationLayout();
    this.userInactive.subscribe(() => {
      console.log('Session end after 30 seconds');
      // window.location.href = 'https://platzi.com/blog/que-es-el-vendor-file/';
    });
  }

  private getConfigurationLayout() {
    this._layoutService.configuration.subscribe((config: iLayout) => {
      this.layoutOptions = config;
    });
  }

  private reloadPathAfterRefresh() : void {
    this._router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      console.log(decodeURI(this._location.path()));
      console.log(this._router.url);
      this._router.navigate(['/']);
    });
  }

  private setTimeout(): void {
    this.userActivity = setTimeout(() => this.userInactive.next(undefined), 30000);
  }

  private getCountry(): void {
    let baseUrlFlag: String = 'https://flagcdn.com/16x12/';

    $.get('http://ip-api.com/json', (response) => {
      console.log(response.city, response.country);
      const code: String = response.countryCode;
      this.country = {
        name: response.country,
        flag: baseUrlFlag + code.toLowerCase() + '.png'
      }
      console.log(this.country);
    }, 'jsonp');
  }

  @HostListener('window:keydown')
  @HostListener('window:mousedown')
  @HostListener('window:mousemove') refreshUserState() {
    clearTimeout(this.userActivity);
    this.setTimeout();
  }

}
