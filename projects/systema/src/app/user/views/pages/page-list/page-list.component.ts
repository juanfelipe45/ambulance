import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

// Interfaces
import { MetaColumns } from '../../../../shared/interfaces/metaColumn.interface';

// Domains
import { UserProperties } from '../../../domain/user';

// Applications
import { UserApplication } from './../../../application/user.application';

// Components
import { FormComponent } from './../../components/form/form.component';
import { BaseComponent } from '../../../../shared/components/base/base.component';

// Services
import { UtilsService } from '../../../../shared/services/utils/utils.service';

const DISPLAYED_COLUMNS: MetaColumns = [
  {field: 'id', title: 'ID'},
  {field: 'nombre', title: 'Nombre'},
  {field: 'correo', title: 'Correo'},
];

const LIST_FIELDS: string[] = [
  'id',
  'nombre',
  'correo',
];

@Component({
  selector: 'amb-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.sass']
})
export class PageListComponent extends BaseComponent<UserProperties, UserApplication, FormComponent> implements OnInit {

  public override listFields: String[];
  public override displayedColumns: MetaColumns;
  public override dataSource: MatTableDataSource<UserProperties>;

  constructor(
    private readonly _userApplication: UserApplication,
    protected override readonly _utilsService: UtilsService,
  ) {
    super(FormComponent, 'form-modal-user', _userApplication, _utilsService);

    this.fileName = 'Users';
    this.sheetName = 'List';
    this.titleReport = 'Reporte de Usuarios'

    this.listFields = LIST_FIELDS;
    this.displayedColumns = DISPLAYED_COLUMNS;
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {}

}
