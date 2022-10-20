import { AuthApplication } from './../../../application/auth.application';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StorageApplication } from '../../../application/storage.application';

@Component({
  selector: 'amb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  public username: string = "Juan Gonzalez";

  @Input() public country: {name: string, flag: string} = {name: '', flag: ''};
  @Output() private onToggleMenu: EventEmitter<void> = new EventEmitter<void>();

  constructor(private readonly _auth: AuthApplication, private readonly _storage: StorageApplication) {
    this.username = _storage.getFieldInToken('name') as string;
  }

  ngOnInit(): void {
  }

  toggleMenu(): void {
    this.onToggleMenu.emit();
  }

  logout() {
    this._auth.logout();
  }

}
