import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

// Angular Material
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';

// Components
import { LoginComponent } from './views/components/login/login.component';
import { HeaderComponent } from './views/components/header/header.component';
import { SidebarComponent } from './views/components/sidebar/sidebar.component';
import { MenuComponent } from './views/components/sidebar/menu/menu.component';
import { PageLoginComponent } from './views/pages/page-login/page-login.component';
import { UtilsService } from '../shared/services/utils/utils.service';

const COMPONENTS = [
  MenuComponent,
  LoginComponent,
  HeaderComponent,
  SidebarComponent,
  PageLoginComponent,
];

const IMPORTS = [
  CommonModule,
  RouterModule,
  MatIconModule,
  MatMenuModule,
  MatListModule,
  MatInputModule,
  MatButtonModule,
  MatToolbarModule,
  FlexLayoutModule,
  MatFormFieldModule,
  ReactiveFormsModule,
  MatSnackBarModule,
  MatDialogModule,
];

const EXPORTS = [
  HeaderComponent,
  SidebarComponent,
];


@NgModule({
  declarations: [...COMPONENTS],
  imports: [...IMPORTS],
  exports: [...EXPORTS],
  providers: [UtilsService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CoreModule { }
