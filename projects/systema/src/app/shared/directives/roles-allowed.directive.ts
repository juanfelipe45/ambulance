import { Directive, Input, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';
import { AuthApplication } from '../../core/application/auth.application';
import { StorageApplication } from '../../core/application/storage.application';

@Directive({
  selector: '[rolesAllowed]'
})
export class RolesAllowedDirective implements OnInit{

  public rolesAllowed: string[] = [];

  @Input('rolesAllowed') public roles: string = '';

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private readonly _auth: AuthApplication,
    private readonly _storage: StorageApplication,
  ) { }

  public ngOnInit(): void {
      this.rolesAllowed = this.roles.split(',');
      this.execute();
  }

  private execute() {
    const isUserLogged = this._auth.isUserLogged;
    const rolesUser = this._storage.getFieldInToken('roles') as string[];
    const isUserAuthorized = rolesUser.some(role => this.rolesAllowed.includes(role));

    if (isUserLogged && isUserAuthorized) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.remove();
    }
  }
}
