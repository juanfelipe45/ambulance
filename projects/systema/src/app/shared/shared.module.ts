import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { UtilsService } from './services/utils/utils.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Perfect Scroll bar
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

// Material Modules
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';

// Components
import { TitleComponent } from './components/title/title.component';
import { TableComponent } from './components/table/table.component';
import { ContainerComponent } from './components/container/container.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { PhotoComponent } from './components/photo/photo.component';
import { UploadDirective } from './directives/upload.directive';
import { WebcamModule } from 'ngx-webcam';
import { KeypadComponent } from './components/keypad/keypad.component';
import { RolesAllowedDirective } from './directives/roles-allowed.directive';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    TitleComponent,
    TableComponent,
    PhotoComponent,
    UploadDirective,
    ConfirmComponent,
    ContainerComponent,
    PaginatorComponent,
    KeypadComponent,
    RolesAllowedDirective,
  ],
  imports: [
    WebcamModule,
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatSortModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    FlexLayoutModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    PerfectScrollbarModule,
  ],
  exports: [
    MatIconModule,
    MatCardModule,
    TitleComponent,
    TableComponent,
    MatInputModule,
    MatTableModule,
    PhotoComponent,
    MatButtonModule,
    MatDialogModule,
    ConfirmComponent,
    MatToolbarModule,
    FlexLayoutModule,
    ContainerComponent,
    PaginatorComponent,
    MatFormFieldModule,
    PerfectScrollbarModule,
    KeypadComponent,
    RolesAllowedDirective,
  ],
  providers: [
    UtilsService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },

  ]
})
export class SharedModule { }
