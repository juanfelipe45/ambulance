import { ConfirmComponent } from './../../components/confirm/confirm.component';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import * as XLSX from 'xlsx';
import { MetaColumns } from '../../interfaces/metaColumn.interface';

declare var require: any;

const pdfMake = require('pdfmake/build/pdfmake.js');
const pdfFonts = require('pdfmake/build/vfs_fonts.js');

pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Injectable({
  providedIn: 'platform'
})
export class UtilsService {

  constructor(
    private readonly _dialog: MatDialog,
    private readonly _notification: MatSnackBar,
  ) { }

  public showModalWindow(classComponent: any, options: {[s: string] : string | number | boolean | object }): MatDialogRef<any> {
    return this._dialog.open(classComponent, options);
  }

  public showConfirm(message?: string) {
    const reference = this._dialog.open(ConfirmComponent, {width: '340px', disableClose: true})

    if (message) {
      reference.componentInstance.messageToConfirm = message;
    }

    return reference.afterClosed();
  }

  public showNotification(message: string) {
    this._notification.open(message, '', {
      duration: 3000,
    });
  }

  // Exports

  public exportToExcel<Entity>(
    records: Entity[],
    metaColumns: MetaColumns,
    filename: string,
    sheetName: string
  ) {
    const result = this.dtoExcel(records, metaColumns);
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet([]);
    XLSX.utils.sheet_add_json(ws, result);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, sheetName);
    XLSX.writeFile(wb, `${filename}.xlsx`);
  }

  private dtoExcel<Entity>(records: Entity[], metaColumns: MetaColumns) {
    return records.map((item: Entity) => {
      const newElement = {};
      for (const prop in item) {
        const metaData = metaColumns.find((el) => el.field === prop);
        if (metaData) {
          newElement[metaData.title] = item[prop];
        }
      }

      return newElement;
    });
  }

  public async exportToPdf<Entity>(
    records: Entity[],
    metaColumns: MetaColumns,
    filename: string,
    title: string
  ) {
    const dataUrl = await this.getDataUrl('/assets/img/logo.jpg');

    const dataFormatted = {
      pageSize: 'A4',
      pageOrientation: 'portrait',
      pageMargins: [20, 20, 20, 20],
      content: [
        this.generateTableHeader(records, dataUrl, title.toUpperCase()),
        this.generateTableData(records, metaColumns),
      ],
      styles: this.generateStyles(),
    };

    this.generatePdf(dataFormatted, filename);
  }

  private generateTableHeader<Entity>(
    data: Entity[],
    dataUrl: any,
    title: string
  ) {
    return {
      margin: [0, 0, 0, 15],
      table: {
        widths: [120, 'auto', 50, 'auto'],
        body: [
          [
            {
              borderWidth: ['1px', '1px', '1px', '1px'],
              borderColor: ['#000', '#000', '#000', '#000'],
              border: [false, false, true, false],
              width: 100,
              image: dataUrl,
            },
            {
              border: [false, false, false, false],
              text: [
                this.generateColum('Channel', 'headerLeft'),
                this.generateColum('Av. De La República 3645', 'subHeaderLeft'),
                this.generateColum('San Isidro, Lima Perú', 'subHeaderLeft'),
                this.generateColum('Tel: (591) 222-2222', 'subHeaderLeft'),
                this.generateColum('info@channel.com', 'subHeaderLeft'),
                this.generateColum('www.channel.com', 'subHeaderLeft'),
              ],
            },
            {
              border: [false, false, false, false],
              text: '',
            },
            {
              border: [false, false, false, false],
              text: title,
              style: 'titleReport',
            },
          ],
        ],
      },
    };
  }

  private generateTableData<Entity>(data: Entity[], metaColumns: MetaColumns) {
    const body = data
      .map((el) => {
        const newElement = {};
        Object.keys(el).forEach((key) => {
          const metaData = metaColumns.find((el) => el.field === key);
          if (metaData) {
            newElement[metaData.field] = el[key];
          }
        });
        return newElement;
      })
      .map((el) =>
        Object.keys(el).map((prop) =>
          this.generateRowData(el, metaColumns, prop)
        )
      );

    const quantityCols = metaColumns.length;
    const widths = Array.from(Array(quantityCols).keys()).map(
      (el) => Math.floor(100 / quantityCols) + '%'
    );

    const rows = [];
    metaColumns.forEach((el) => {
      const row = [
        {
          border: [false, false, false, false],
          text: el.title,
          style: 'header',
        },
      ];

      rows.push(row);
    });

    body.unshift(rows);

    return {
      margin: [0, 0, 0, 15],
      table: {
        widths,
        body,
      },
    };
  }

  private generateRowData<Entity>(
    data: Partial<Entity>,
    metaColumns: MetaColumns,
    key: string
  ) {
    const column = metaColumns.find((el) => el.field === key);
    if (column) {
      return [
        {
          border: [false, false, false, false],
          text: data[key],
        },
      ];
    } else {
      return [];
    }
  }

  private generatePdf(dataFormatted: any, filename: string) {
    const docGenerated = pdfMake.createPdf(dataFormatted);
    docGenerated.download(`${filename}.pdf`);
  }

  private async getDataUrl(pathLogo: string) {
    const blob = await fetch(pathLogo).then((r) => r.blob());
    const dataUrl = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(blob);
    });

    return dataUrl;
  }

  private generateStyles() {
    return {
      headerLeft: {
        fontFamily: 'Verdana',
        fontSize: '13',
        height: 16,
        color: '#3c3b40',
      },
      subHeaderLeft: {
        fontFamily: 'Verdana',
        fontSize: 10,
        height: 16,
        color: '#3c3b40',
      },
      titleReport: {
        fontFamily: 'Verdana',
        fontSize: 15,
        height: 16,
        color: '#3c3b40',
      },
      header: {
        fontFamily: 'Verdana',
        fontSize: 13,
        height: 14,
        color: '#3c3b40',
        bold: true,
        fillColor: 'black',
      },
    };
  }

  private generateColum(text: string, style: any = null) {
    const column = {
      text: text + '\n',
    };

    if (style) {
      column['style'] = style;
    }

    return column;
  }

}
