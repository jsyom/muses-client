import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AjaxListModule } from 'ng-capsule9/src/lib/ajax/ajax-list/ajax-list.module';
import { ColumnModule } from 'ng-capsule9/src/lib/components/column/column.module';
import { ProductItemComponent } from './product-item.component';
import {NgReduxTestingModule} from '@angular-redux/store/lib/testing';
import {ProductAttributesComponent} from '../product-attributes/product-attributes.component';

describe('ProductItemComponent', () => {
  let component: ProductItemComponent;
  let fixture: ComponentFixture<ProductItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProductItemComponent,
        ProductAttributesComponent
      ],
      imports: [
        NgReduxTestingModule,
        AjaxListModule,
        ColumnModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
