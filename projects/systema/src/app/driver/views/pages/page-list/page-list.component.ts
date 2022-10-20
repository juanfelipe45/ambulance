import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

// Interfaces
import { MetaColumns } from '../../../../shared/interfaces/metaColumn.interface';

// Domains
import { DriverProperties } from './../../../domain/driver';

// Applications
import { DriverApplication } from './../../../application/driver.application';

// Components
import { FormComponent } from '../../components/form/form.component';
import { BaseComponent } from '../../../../shared/components/base/base.component';

// Services
import { UtilsService } from 'projects/systema/src/app/shared/services/utils/utils.service';

// Const Data
const DISPLAYED_COLUMNS: MetaColumns = [
  {field: 'id', title: 'Id'},
  {field: 'nombre', title: 'Nombre'},
];

const LIST_FIELDS: string[] = [
  'dni',
  'nombre',
  'segundo_nombre',
  'apellido',
  'correo',
  'cmp',
];

@Component({
  selector: 'amb-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.sass']
})
export class PageListComponent extends BaseComponent<DriverProperties, DriverApplication, FormComponent> implements OnInit {


  public override listFields: String[];
  public override displayedColumns: MetaColumns;
  public override dataSource: MatTableDataSource<DriverProperties>;

  constructor(
    private readonly _driverApplication: DriverApplication,
    protected override readonly _utilsService: UtilsService,
  ) {
    super(FormComponent, 'form-modal-driver', _driverApplication,  _utilsService);

    this.sheetName = 'List';
    this.fileName = 'Driver';
    this.titleReport = 'DRIVERS';

    this.listFields = LIST_FIELDS;
    this.displayedColumns = DISPLAYED_COLUMNS;
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
  }

}
