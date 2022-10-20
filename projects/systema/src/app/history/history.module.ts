import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routings
import { HistoryRoutingModule } from './history-routing.module';

// Modules
import { SharedModule } from './../shared/shared.module';

// Components
import { FormComponent } from './views/components/form/form.component';
import { PageListComponent } from './views/pages/page-list/page-list.component';


@NgModule({
  declarations: [
    FormComponent,
    PageListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HistoryRoutingModule
  ]
})
export class HistoryModule { }
