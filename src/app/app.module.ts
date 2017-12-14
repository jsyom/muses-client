import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './containers/login/login.component';
import { PageNotFoundComponent } from './containers/page-not-found/page-not-found.component';
import { HomeComponent } from './containers/home/home.component';
import {RouterModule} from '@angular/router';

import {APP_ROUTES} from './app.routes';
import { ReservationComponent } from './components/reservation/reservation.component';
import { MenusComponent } from './containers/menus/menus.component';
import { AgmCoreModule } from '@agm/core';
import { DiscoballComponent } from './components/discoball/discoball.component';
import { ClientModule } from './containers/client/client.module';
import { LogoModule } from './components/logo/logo.module';

/* Redux */
import {NgReduxModule} from '@angular-redux/store';
import {NgReduxRouterModule} from '@angular-redux/router';
import {StoreModule} from './store/store.module';
import {AjaxItemModule, AjaxListModule} from 'ng-capsule9/src/lib/ajax'
import {NgCapsule9Module} from 'ng-capsule9/src/lib/module'
import {AJAX_ITEM_API_URL, AJAX_LIST_API_URL} from './store/root.types';
import {AuthModule} from 'ng-capsule9/src/lib/auth/auth.module';
import {AdminModule} from './containers/admin/admin.module';
import {DashboardModule} from './containers/dashboard/dashboard.module';
import {ProductsManager} from './managers/products/products.module';
import {CategoriesManager} from './managers/categories/categories.module';
import {UsersManager} from './managers/users/users.module';
import {ReservationManager} from './managers/reservation/reservation.module';
import {EventsManager} from './managers/events/events.module';
import {SettingsManager} from './managers/settings/settings.module';
import {ProductsManagerRoutes} from './managers/products/products.routes';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LocalStorageModule} from './ng-capsule/local-storage/local-storage.module';
import {NgCapsuleModule} from './ng-capsule/ng-capsule.module';
import {TwitterModule} from './ng-capsule/integration/twitter/twitter.module';
import {D3Service} from 'd3-ng2-service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    HomeComponent,
    ReservationComponent,
    MenusComponent,
    DiscoballComponent,
  ],
  imports: [
    /* App Modules */
    AuthModule,
    // SidebarModule,
    // NavbarModule,
    LogoModule,
    TwitterModule.forRoot(),
    NgCapsuleModule,
    NgCapsule9Module,

    /* Managers */
    ProductsManager,
    CategoriesManager,
    UsersManager,
    ReservationManager,
    EventsManager,
    SettingsManager,

    /* App Route Modules */
    ClientModule,
    AdminModule,
    DashboardModule,
    // ProductsManagerRoutes,

    /* Redux */
    StoreModule,
    NgReduxModule,
    NgReduxRouterModule,
    AjaxItemModule.forRoot({urls: AJAX_ITEM_API_URL}),
    AjaxListModule.forRoot({urls: AJAX_LIST_API_URL}),

    /* Cache */
    LocalStorageModule.withConfig({
      prefix: 'reduxPersist',
      storageType: 'localStorage'
    }),
    /* Angular Modules */
    // BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(APP_ROUTES),

    /* Third Party Modules */
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyANuHrprBNLHBh8A_oGbsTBSr5EEuR0M38'
    })
  ],
  providers: [D3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
