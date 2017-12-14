import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientComponent } from './client.component';
import {RouterTestingModule} from '@angular/router/testing';
import {SidebarModule} from '../../ng-capsule/design/sidebar/sidebar.module';
import {NavbarModule} from '../../ng-capsule/design/navbar/navbar.module';
import {LogoComponent} from '../../components/logo/logo.component';
import {DiscoballComponent} from '../../components/discoball/discoball.component';
import {LogoModule} from '../../components/logo/logo.module';

describe('ClientComponent', () => {
  let component: ClientComponent;
  let fixture: ComponentFixture<ClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientComponent ],
      imports: [
        RouterTestingModule,
        NavbarModule,
        SidebarModule,
        LogoModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
