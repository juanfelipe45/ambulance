import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Routing
import { UserRoutingModule } from './user-routing.module';

// Modules
import { SharedModule } from './../shared/shared.module';
import { MatSelectModule } from '@angular/material/select';

// Components
import { FormComponent } from './views/components/form/form.component';
import { PageListComponent } from './views/pages/page-list/page-list.component';
import { UserInfrastructure } from './infrastructure/user.infrastructure';

const COMPONENTS = [
  FormComponent,
  PageListComponent,
];

const MODULES = [
  SharedModule,
  CommonModule,
  MatSelectModule,
  UserRoutingModule,
  ReactiveFormsModule,
];

const INFRASTRUCTURE = [UserInfrastructure];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
  providers: [...INFRASTRUCTURE],
})
export class UserModule { }
