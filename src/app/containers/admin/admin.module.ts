import {NgModule} from '@angular/core';
import {AdminComponent} from './admin.component';
import {NavbarModule} from '../../ng-capsule/design/navbar/navbar.module';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SidebarModule} from '../../ng-capsule/design/sidebar/sidebar.module';
import {DashboardModule} from '../dashboard/dashboard.module';
import {MenuModule} from 'ng-capsule9/src/lib/components/menu/menu.module';
import {NgReduxModule} from '@angular-redux/store';
import {AuthModule} from 'ng-capsule9/src/lib/auth/auth.module';
import {DropdownModule} from '../../ng-capsule/design/dropdown/dropdown.module';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';

@NgModule({
  declarations: [AdminComponent, AdminSidebarComponent],
  exports: [AdminComponent],
  imports: [
    AuthModule,
    CommonModule,
    // NavbarModule,
    SidebarModule,
    DropdownModule,
    MenuModule,
    RouterModule,
    DashboardModule,
    NgReduxModule
  ]
})
export class AdminModule { }
