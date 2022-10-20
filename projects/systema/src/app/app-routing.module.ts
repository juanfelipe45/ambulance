import { PageLoginComponent } from './core/views/pages/page-login/page-login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './shared/guards/authentication.guard';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: PageLoginComponent },
  { path: 'users', loadChildren: () => import('./user/user.module').then(m => m.UserModule), canLoad: [AuthenticationGuard]},
  { path: 'medics', loadChildren: () => import('./medic/medic.module').then(m => m.MedicModule), canLoad: [AuthenticationGuard]},
  { path: 'drivers', loadChildren: () => import('./driver/driver.module').then(m => m.DriverModule), canLoad: [AuthenticationGuard]},
  { path: 'history', loadChildren: () => import('./history/history.module').then(m => m.HistoryModule), canLoad: [AuthenticationGuard]},
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule), canLoad: [AuthenticationGuard]},
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
