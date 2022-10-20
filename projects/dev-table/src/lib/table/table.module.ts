import { MatIconModule } from '@angular/material/icon';
import { TableComponent } from './table.component';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [TableComponent],
  imports: [MatTableModule, CommonModule, MatIconModule],
  exports: [TableComponent],
})
export class TableModule {}
