import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsListComponent } from './products-list.component';
import { AjaxListActions, AjaxItemActions } from 'ng-capsule9/src/lib/ajax';
import {NgReduxTestingModule} from '@angular-redux/store/lib/testing';
import {RouterTestingModule} from '@angular/router/testing';

describe('ProductsListComponent', () => {
  let component: ProductsListComponent;
  let fixture: ComponentFixture<ProductsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsListComponent ],
      imports: [ NgReduxTestingModule, RouterTestingModule ],
      providers: [AjaxListActions, AjaxItemActions]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
