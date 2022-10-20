import { Observable } from 'rxjs';
import { Role, RoleProperties } from './../../../../role/domain/role';
import { UserProperties } from './../../../domain/user';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { RoleApplication } from 'projects/systema/src/app/role/application/role.application';
import { UserFactory } from '../../../domain/user.factory';

@Component({
  selector: 'amb-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class FormComponent implements OnInit {

  public title: string;
  public showHint: boolean;
  public formGroup: FormGroup;
  public roles: Observable<RoleProperties[]>;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: UserProperties,
    private readonly _roleApplication: RoleApplication,
    private readonly _reference: MatDialogRef<FormComponent>,
  ) {
    this.showHint = !!this.data;
    this.title = this.data ? 'Edit' : 'Add';
  }

  ngOnInit(): void {
    this.loadForm();
    this.loadRoles();
  }

  private loadRoles() {
    this.roles = this._roleApplication.list();
  }

  private loadForm() {
    this.formGroup = new FormGroup({
      id: new FormControl(this.data?.id),
      nombre: new FormControl(this.data?.nombre, Validators.required),
      correo: new FormControl(this.data?.correo, [Validators.required, Validators.email]),
      roles: new FormControl(this.data?.roles.map((role) => role.id), Validators.required),
    });

    if (this.data) {
      this.formGroup.addControl('password', new FormControl(''));
    } else {
      this.formGroup.addControl(
        'password',
        new FormControl('', Validators.required)
      );
    }
  }

  public save() {
    const values: UserProperties = this.formGroup.value;

    const userId = values.id;
    delete values.id;

    if (!values.password) {
      delete values.password;
    }

    // const user = UserFactory.create(values.nombre, values.correo, values.password, values.roles);

    this._reference.close({id: userId, record: values});
  }

}
