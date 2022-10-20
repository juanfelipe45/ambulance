import { Observable } from 'rxjs';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import { MatColumnDef, MatTable, MatTableDataSource } from '@angular/material/table';
import { Component, Input, OnInit, ViewChild, AfterViewInit, Output, EventEmitter, OnChanges, SimpleChanges, ContentChildren, QueryList, AfterContentInit, ContentChild } from '@angular/core';

// Mat table components
import { MatPaginator } from '@angular/material/paginator';

// Interfaces
import { MetaColumns } from './metacolum.interface';

@Component({
  selector: 'dev-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})
export class TableComponent implements OnInit, AfterViewInit, OnChanges, AfterContentInit {

  public listFields: any[];
  public selection: SelectionModel<any>;

  @ViewChild(MatSort) public sort!: MatSort;
  @ViewChild(MatTable, {static: true}) public table!: MatTable<any>;

  @ContentChildren(MatColumnDef, {descendants: true}) columnsDef!: QueryList<MatColumnDef>;

  @Output() private eventSelectedModel: EventEmitter<any>;

  @Input() public paginator!: MatPaginator;
  @Input() public isSelectionMode: boolean;
  @Input() public isMultipleSelectionMode: boolean;
  @Input() public filterString: Observable<String>;
  @Input() public displayedColumns: MetaColumns;
  @Input() public dataSource : MatTableDataSource<any>;

  constructor() {
    this.listFields = [];
    this.isSelectionMode = false;
    this.isMultipleSelectionMode = false;
    this.filterString = new Observable();
    this.eventSelectedModel = new EventEmitter<any>();
    this.selection = new SelectionModel<any>(false, []);
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.dataSource.data);

    if (changes['displayedColumns']) {
      this.listFields = this.displayedColumns.map((el) => el.field);
      console.log(this.listFields);
    }
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  ngAfterContentInit(): void {
    console.log('columnsDef', this.columnsDef);

    if (!this.columnsDef)
      return;

    this.columnsDef.forEach((columnDef: MatColumnDef) => {
      this.listFields.push(columnDef.name);
      this.table?.addColumnDef(columnDef);
    });
  }

  public rowSelected(row: any): void {
    if (this.isSelectionMode || this.isMultipleSelectionMode) {
      if (this.isSelectionMode) {
        this.eventSelectedModel.emit(row);
      }
    }
  }

  public applyFilter(filter: String): void {
    this.dataSource.filter = filter.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
