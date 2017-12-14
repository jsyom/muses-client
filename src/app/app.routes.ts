import { HomeComponent } from './containers/home/home.component';
import { AdminComponent } from './containers/admin/admin.component';
import { ClientComponent } from './containers/client/client.component';
import { LoginComponent } from './containers/login/login.component';
import { PageNotFoundComponent } from './containers/page-not-found/page-not-found.component';
import {DashboardComponent} from './containers/dashboard/dashboard.component';
import {EventsListComponent} from './managers/events/events-list/events-list.component';
import {UsersListComponent} from './managers/users/users-list/users-list.component';
import {ReservationListComponent} from './managers/reservation/reservation-list/reservation-list.component';
import {CategoriesListComponent} from './managers/categories/categories-list/categories-list.component';
import {SettingsComponent} from './managers/settings/settings.component';
// import {ProductsManagerComponent} from './managers/products/products-manager/products-manager.component';
import { Routes, CanActivate } from '@angular/router';
import {MenusComponent} from './containers/menus/menus.component';
// import {AuthGuardService} from './ng-capsule/auth/auth.guard.service';

export const APP_ROUTES: Routes = [
  /* Client Routes */
  { path: '', component: ClientComponent,
    // canActivate: [AuthGuardService],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'menus', component: MenusComponent }
    ]
  },
  { path: 'admin', component: AdminComponent,
    // canActivate: [AuthGuardService],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      /* Products */
      { path: 'products', loadChildren: './managers/products/products.module#ProductsManager'},
      { path: 'categories', component: CategoriesListComponent },
      /* Booking */
      { path: 'reservations', component: ReservationListComponent },
      /* Marketing Campaign */
      { path: 'events', component: EventsListComponent },
      /* Essentials */
      { path: 'settings', component: SettingsComponent },
      { path: 'users', component: UsersListComponent },
      { path: 'login', component: LoginComponent },
      { path: '**', component: PageNotFoundComponent }
    ]
  },
  // { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent }
];

export const ADMIN_ROUTES = [];

/* for ajax modules */
export const ITEM_API_TYPES = {};
export const ITEM_API_ROUTES = {};
export const LIST_API_TYPES = {};
export const LIST_API_ROUTES = {};
