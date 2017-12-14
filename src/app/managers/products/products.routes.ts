import {RouterModule} from '@angular/router';
import {ProductsListComponent} from './products-list/products-list.component';
import {ProductsManagerComponent} from './products-manager/products-manager.component';
import {ProductItemComponent} from './product-item/product-item.component';
import {ModuleWithProviders} from '@angular/core';
import {CategoriesTreeComponent} from '../categories/categories-tree/categories-tree.component';

/*
 * ---------------------
 * ProductsManagerRoutes
 * ---------------------
 * Sub route RouterModule with provider for product manager
 */
export const ProductsManagerRoutes: ModuleWithProviders = RouterModule.forChild([
  {
    path: '', component: ProductsManagerComponent, children: [
      { path: '', redirectTo: '/admin/products/list', pathMatch: 'full'},
      { path: 'list', component: ProductsListComponent},
      { path: 'new', component: ProductItemComponent },
      { path: 'edit/:id', component: ProductItemComponent },
      { path: 'attributes', component: ProductsListComponent },
      { path: 'type', component: ProductsListComponent },
      // { path: 'categories', component: CategoriesTreeComponent }
    ]
  }
]);


