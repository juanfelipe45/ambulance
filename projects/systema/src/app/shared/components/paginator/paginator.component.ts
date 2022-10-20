import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { Component, EventEmitter, Input, OnInit, Output, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'amb-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.sass']
})
export class PaginatorComponent implements OnInit, AfterViewInit {

  @Input() public length: number;

  @Output() public  onChangePage: EventEmitter<PageEvent>;
  @Output() public  emitPaginator: EventEmitter<MatPaginator>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() {
    this.length = 0;
    this.onChangePage = new EventEmitter();
    this.emitPaginator = new EventEmitter();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
      this.emitPaginator.emit(this.paginator);
  }

  public changePage(pageEvent: PageEvent): void {
    this.onChangePage.emit(pageEvent);
  }
}
