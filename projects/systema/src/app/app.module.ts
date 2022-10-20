import { DriverInfrastructure } from './driver/infrastructure/driver.infrastructure';
import { DriverApplication } from './driver/application/driver.application';
import { MedicInfrastructure } from './medic/infrastructure/medic.infrastructure';
import { MedicApplication } from './medic/application/medic.application';
import { AuthInfrastructure } from './core/infrastructure/auth.infrastructure';
import { AuthApplication } from './core/application/auth.application';
import { UserInfrastructure } from './user/infrastructure/user.infrastructure';
import { UserApplication } from './user/application/user.application';
import { NgModule, Provider } from '@angular/core';
import { CoreModule } from './core/core.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material Import
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatPaginatorIntl } from '@angular/material/paginator';

// Services
import { IconService } from './shared/services/icon/icon.service';
import { Paginator } from './shared/services/paginator/paginator.service';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Token Layout
import { LayoutModule } from './config/injections/layout/modules/layout.module';
import { layoutConstant } from './config/injections/layout/constants/layout.constant';

// Components
import { AppComponent } from './app.component';
import { StorageApplication } from './core/application/storage.application';
import { StorageInfrastructure } from './core/infrastructure/storage.infrastructure';
import { TokenInterceptor } from './shared/interceptors/token.interceptor';
import { RoleApplication } from './role/application/role.application';
import { RoleInfrastructure } from './role/infrastructure/role.infrastructure';

const COMPONENTS = [
  AppComponent
];

const IMPORTS = [
  CoreModule,
  FormsModule,
  BrowserModule,
  MatIconModule,
  AppRoutingModule,
  MatSidenavModule,
  HttpClientModule,
  ReactiveFormsModule,
  BrowserAnimationsModule,
  LayoutModule.forRoot(layoutConstant),
]

const MATERIAL = [{provide: MatPaginatorIntl, useClass: Paginator}];

const APPLICATIONS = [
  UserApplication,
  AuthApplication,
  StorageApplication,
  MedicApplication,
  DriverApplication,
  RoleApplication
];
const INFRASTRUCTURE = [
  UserInfrastructure,
  AuthInfrastructure,
  StorageInfrastructure,
  MedicInfrastructure,
  DriverInfrastructure,
  RoleInfrastructure
];

const INTERCEPTORS = [
  {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...IMPORTS],
  providers: [
    ...MATERIAL,
    ...INTERCEPTORS,
    ...APPLICATIONS,
    ...INFRASTRUCTURE,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private readonly _iconService: IconService) {}
}
