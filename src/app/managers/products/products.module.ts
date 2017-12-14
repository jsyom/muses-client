import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { AjaxItemModule, AjaxListModule } from 'ng-capsule9/src/lib/ajax'
import { ColumnModule } from 'ng-capsule9/src/lib/components/column/column.module';
// import {TabsetModule} from 'ng-capsule9/src/lib/components/tabset/tabset.module';
import {NgReduxModule} from '@angular-redux/store';
import {CategoriesManager} from '../categories/categories.module';
import {ProductsManagerComponent} from './products-manager/products-manager.component';
import {ProductsManagerRoutes} from './products.routes';
import {StoreModule} from '../../store/store.module';
import {StickyModule} from '../../ng-capsule/design/sticky/sticky.module';
import {ProductAttributesComponent} from './product-attributes/product-attributes.component';
import {Select2Module} from 'ng2-select2';

const PRODUCTS_MANAGER_EXPORTS = [
  ProductsManagerComponent,
  ProductsListComponent,
  ProductItemComponent,
  ProductAttributesComponent
];
@NgModule({
  imports: [
    CommonModule,
    ProductsManagerRoutes,
    // SidebarModule,
    // MenuModule,
    Select2Module,
    StoreModule,
    // TabsetModule,
    AjaxItemModule,
    AjaxListModule,
    NgReduxModule,
    ColumnModule
    // CategoriesManager,
  ],
  declarations: PRODUCTS_MANAGER_EXPORTS,
  exports: [...PRODUCTS_MANAGER_EXPORTS]
})
export class ProductsManager { }
