import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routings
import { MedicRoutingModule } from './medic-routing.module';

// Modules
import { SharedModule } from './../shared/shared.module';

// Material Modules
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';

// Components
import { FormComponent } from './views/components/form/form.component';
import { PageListComponent } from './views/pages/page-list/page-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormComponent,
    PageListComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    MatInputModule,
    MatSidenavModule,
    MatFormFieldModule,
    MedicRoutingModule,
    ReactiveFormsModule,
  ]
})
export class MedicModule { }
