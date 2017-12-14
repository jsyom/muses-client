import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsManagerComponent } from './products-manager.component';
import {RouterTestingModule} from '@angular/router/testing';
import {Component} from '@angular/core';

describe('ProductsManagerComponent', () => {
  let component: ProductsManagerComponent;
  let fixture: ComponentFixture<ProductsManagerComponent>;

  @Component({
    template: ''
  })
  class DummyComponent { }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsManagerComponent, DummyComponent ],
      imports: [
        /* ROUTES modules */
        RouterTestingModule.withRoutes([
          { path: 'list', component: DummyComponent },
          { path: 'detail', component: DummyComponent }
        ]),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
