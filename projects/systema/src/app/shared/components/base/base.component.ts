import { take } from 'rxjs';
import { Base } from "../../domain/base.interface";
import { PageEvent } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { IResponsePage } from "../../interfaces/response-page";
import { MetaColumns } from "../../interfaces/metaColumn.interface";
import { UtilsService } from "../../services/utils/utils.service";
import { MatDialogRef } from '@angular/material/dialog';
import * as XLSX from 'xlsx';

declare var require: any;

const pdfMake = require('pdfmake/build/pdfmake.js');
const pdfFonts = require('pdfmake/build/vfs_fonts.js');

enum TypeExport {
  EXCEL = 'excel',
  PDF = 'pdf',
}

export abstract class BaseComponent<Entity, Application extends Base<Entity>, Modal> {
  private application: Application;

  protected abstract listFields: String[];
  protected abstract displayedColumns: MetaColumns;
  protected abstract dataSource: MatTableDataSource<Entity>;

  protected pageSize: number = 5;
  protected pagIndex: number = 0;
  protected quantityRecords: number = 0;

  protected fileName: string = 'data';
  protected sheetName: string = 'Sheet1';
  protected titleReport: string = 'Título reporte';

  constructor(
    private context: any,
    private classStyle: string,
    private _application: Application,
    protected readonly _utilsService: UtilsService,
  ) {
    this.application = _application;
    this.getRecordsByPage();
  }

  public changePage(pageEvent: PageEvent) {
    this.pageSize = pageEvent.pageSize;
    this.pagIndex = pageEvent.pageIndex;
    this.getRecordsByPage();
  }

  private fillDataSource(result: IResponsePage<Entity>): void {
    this.dataSource.data = result.records;
    this.quantityRecords = result.totalRecords;
    console.log(result);
  }

  protected getRecordsByPage(): void {
    this.application
      .page(this.pagIndex, this.pageSize)
      .subscribe({next: this.fillDataSource.bind(this)});
  }

  protected delete(row: any) {
    this._utilsService.showConfirm('Really? Do you want to delete it?').pipe(take(1))
    .subscribe(response => {
      if (response) {
        this.application.delete(row.id).subscribe(() => {
          this.getRecordsByPage();
          this._utilsService.showNotification('Registro eliminado');
        })
      }
    });
  }

  protected showModalWindow(row: any = null) {
    const reference: MatDialogRef<Modal> = this._utilsService.showModalWindow(this.context, {
      disableClose: true,
      panelClass: this.classStyle,
      enterAnimationDuration: '300ms',
      data: row,
    });

    reference.afterClosed().subscribe((response: any) => {
      if (!response)
        return;

      if (response.id) {
        this.application.update(response.id, response.record).subscribe(() => {
          this.getRecordsByPage();
          this._utilsService.showNotification('Registro actualizado')
        });
      } else {
        this.application.insert(response.record).subscribe(() => {
          this.getRecordsByPage();
          this._utilsService.showNotification('Registro insertado')
        });
      }
    });
  }

  protected export(type: string) {
    this.application.list().subscribe((records: Entity[]) => {
      if (type === TypeExport.EXCEL) {
        this._utilsService.exportToExcel(records, this.displayedColumns, this.fileName, this.sheetName);
      } else if (type === TypeExport.PDF) {
        this._utilsService.exportToPdf(records, this.displayedColumns, this.fileName, this.titleReport);
      }
    });
  }

}
