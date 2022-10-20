import { SocketInfrastructure } from './infrastructure/socket.infrastructure';
import { SocketApplication } from './application/socket.application';
import { CovidInfrastructure } from './infrastructure/covid.infrastructure';
import { CovidApplication } from './application/covid.application';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './views/pages/dashboard/dashboard.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CovidComponent } from './views/components/covid/covid.component';
import { SocketComponent } from './views/components/socket/socket.component';


@NgModule({
  declarations: [
    DashboardComponent,
    CovidComponent,
    SocketComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgxChartsModule,
    DashboardRoutingModule
  ],
  providers: [
    CovidApplication,
    SocketApplication,
    CovidInfrastructure,
    SocketInfrastructure,
  ]
})
export class DashboardModule { }
