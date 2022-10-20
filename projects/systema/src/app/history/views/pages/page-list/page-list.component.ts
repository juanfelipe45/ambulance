import { MatPaginator } from '@angular/material/paginator';
import { SharedService } from './../../../../shared/services/shared/shared.service';
import { MatTableDataSource } from '@angular/material/table';
import { MetaColumns } from '../../../../shared/interfaces/metaColumn.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'amb-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.sass']
})
export class PageListComponent implements OnInit {

  private data: any;

  public quantityRecords: number;
  public displayedColumns: MetaColumns;
  public dataSource: MatTableDataSource<any>;

  constructor(private _sharedService: SharedService) {
    this.data = _sharedService.getDefaultData();
    this.dataSource = new MatTableDataSource(this.data);
    this.displayedColumns = _sharedService.getDefaultDisplayedColumns();
    this.quantityRecords = this.data.length;
  }

  ngOnInit(): void {
  }

  public setPaginator(paginator: MatPaginator): void {
    this.dataSource.paginator = paginator;
  }

}
