import { MatSidenav } from '@angular/material/sidenav';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';

// Interfaces
import { MetaColumns } from '../../../../shared/interfaces/metaColumn.interface';

// Domain
import { MedicProperties } from '../../../domain/medic';

// Application
import { MedicApplication } from '../../../application/medic.application';

// Components
import { FormComponent } from '../../components/form/form.component';
import { BaseComponent } from '../../../../shared/components/base/base.component';

// Service
import { UtilsService } from './../../../../shared/services/utils/utils.service';

const DISPLAYED_COLUMNS: MetaColumns = [
  {field: 'dni', title: 'DNI'},
  {field: 'nombre', title: 'Nombre'},
  {field: 'segundo_nombre', title: 'Segundo Nombre'},
  {field: 'apellido', title: 'Apellido'},
  {field: 'correo', title: 'Correo'},
  {field: 'cmp', title: 'CMP'},
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
export class PageListComponent extends BaseComponent<MedicProperties, MedicApplication, FormComponent> implements OnInit {


  public override listFields: String[];
  public override displayedColumns: MetaColumns;
  public override dataSource: MatTableDataSource<MedicProperties>;

  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(
    private readonly _medicApplication: MedicApplication,
    protected override readonly _utilsService: UtilsService,
  ) {
    super(FormComponent, 'form-modal-medic', _medicApplication, _utilsService);

    this.sheetName = 'List';
    this.fileName = 'Medics';
    this.titleReport = 'Medics Report';

    this.listFields = LIST_FIELDS;
    this.displayedColumns = DISPLAYED_COLUMNS;
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {}
}
