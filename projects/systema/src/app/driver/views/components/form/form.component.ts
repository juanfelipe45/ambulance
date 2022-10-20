import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';

// Domains
import { DriverProperties } from '../../../domain/driver';
import { DriverFactory } from '../../../domain/driver.factory';

@Component({
  selector: 'amb-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class FormComponent implements OnInit {

  public title: string;
  public group: FormGroup;

  constructor(
    private reference: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DriverProperties,
  ) {
    this.title = this.data ? 'EDIT' : 'ADD';
  }

  ngOnInit(): void {
    this.loadForm();
  }

  public loadForm() {
    this.group = new FormGroup({
      id: new FormControl(this.data?.id),
      nombre: new FormControl(this.data?.nombre, [Validators.required]),
    });
  }

  public save() {
    const values: DriverProperties = this.group.value;

    const driverId = values.id;
    delete values.id;

    const driver = this.data ? DriverFactory.update(values.nombre) : DriverFactory.create(values.nombre)

    console.log('driver', driver);

    this.reference.close({id: driverId, record: driver});
  }

}
