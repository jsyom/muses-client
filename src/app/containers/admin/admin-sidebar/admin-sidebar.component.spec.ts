import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSidebarComponent } from './admin-sidebar.component';
import {SidebarModule} from '../../../ng-capsule/design/sidebar/sidebar.module';
import {DropdownModule} from '../../../ng-capsule/design/dropdown/dropdown.module';
import {RouterTestingModule} from '@angular/router/testing';
import {MenuModule} from 'ng-capsule9/src/lib/components/menu/menu.module';
describe('AdminSidebarComponent', () => {
  let component: AdminSidebarComponent;
  let fixture: ComponentFixture<AdminSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSidebarComponent ],
      imports: [
        SidebarModule,
        DropdownModule,
        MenuModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSidebarComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges()
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
