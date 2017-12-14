import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesTreeComponent } from './categories-tree/categories-tree.component';
import {RouterModule} from '@angular/router';
import {TreeMenuModule} from '../../ng-capsule/design/tree-menu/tree-menu.module';
import {CategoriesListComponent} from './categories-list/categories-list.component';
import {CategoryItemComponent} from './category-item/category-item.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

const CATEGORIES_MANAGER_EXPORTS = [
  CategoriesTreeComponent,
  CategoriesListComponent,
  CategoryItemComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TreeMenuModule
    // NoopAnimationsModule
  ],
  declarations: CATEGORIES_MANAGER_EXPORTS,
  exports: CATEGORIES_MANAGER_EXPORTS
})
export class CategoriesManager { }
