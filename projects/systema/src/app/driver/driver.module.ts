import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing
import { DriverRoutingModule } from './driver-routing.module';

// Modules
import { SharedModule } from './../shared/shared.module';
import { TableModule } from 'projects/dev-table/src/public-api';

// Components
import { FormComponent } from './views/components/form/form.component';
import { PageListComponent } from './views/pages/page-list/page-list.component';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  declarations: [
    FormComponent,
    PageListComponent,
  ],
  imports: [
    TableModule,
    FormsModule,
    CommonModule,
    SharedModule,
    MatInputModule,
    MatSidenavModule,
    ReactiveFormsModule,
    DriverRoutingModule,
  ]
})
export class DriverModule { }
