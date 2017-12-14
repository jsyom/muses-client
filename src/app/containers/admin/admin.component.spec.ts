import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComponent } from './admin.component';
import {NavbarModule} from '../../ng-capsule/design/navbar/navbar.module';
import {SidebarModule} from '../../ng-capsule/design/sidebar/sidebar.module';
import {RouterTestingModule} from '@angular/router/testing';

import {AuthService} from 'ng-capsule9/src/lib/auth/auth.service';
import {NgReduxTestingModule} from '@angular-redux/store/lib/testing';
import {MenuModule} from 'ng-capsule9/src/lib/components/menu/menu.module';
import {AjaxItemActions} from 'ng-capsule9/src/lib/ajax';
import {Component} from '@angular/core';
import {DropdownModule} from '../../ng-capsule/design/dropdown/dropdown.module';
import {AdminSidebarComponent} from './admin-sidebar/admin-sidebar.component';
import {JwtHelper} from 'angular2-jwt';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  @Component({
    template: ''
  })
  class DummyComponent { }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminComponent, DummyComponent, AdminSidebarComponent ],
      providers: [
        AuthService,
        AjaxItemActions,
        JwtHelper
      ],
      imports: [
        /* UI modules */
        NavbarModule,
        SidebarModule,
        DropdownModule,
        MenuModule,

        /* ROUTES modules */
        RouterTestingModule.withRoutes([
          { path: '', component: DummyComponent },
          { path: 'admin/login', component: DummyComponent }
        ]),
        // DashboardModule,

        /* REDUX modules */
        NgReduxTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
