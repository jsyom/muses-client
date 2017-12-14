import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { MenuItem } from 'primeng/primeng';
import {NgRedux, select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';
import { AjaxItemActions, AjaxListActions } from 'ng-capsule9/src/lib/ajax';
import {AJAX_ITEM_TYPES, AJAX_LIST_TYPES} from '../../../store/root.types';


@Component({
  selector: 'ms-categories-tree',
  template: `
    <ms-tree-menu *ngIf="(categories$ | async)"
                  [model]="(categories$ | async)"></ms-tree-menu>`,
  styleUrls: ['./categories-tree.component.scss']
})
export class CategoriesTreeComponent implements OnInit, OnDestroy {

  // @select(['category', 'item']) readonly category$: Observable<any>;
  // @select(['category', 'item', 'children']) readonly categoryChildren$: Observable<any>;
  // @select(['category', 'error']) readonly categoryError$: Observable<any>;
  // @select(['category', 'loading']) readonly categoryLoading$: Observable<any>;

  @select(['categories', 'list']) readonly categories$: Observable<any>;
  @select(['categories', 'list', 'children']) readonly categoriesChildren$: Observable<any>;
  @select(['categories', 'error']) readonly categoriesError$: Observable<any>;
  @select(['categories', 'loading']) readonly categoriesLoading$: Observable<any>;

  public categorySubscription$;
  public model: MenuItem;
  constructor(
    private store: NgRedux<any>,
    // private itemActions: AjaxItemActions,
    private listActions: AjaxListActions
  ) { }

  ngOnInit() {
    const cachedData = JSON.parse(localStorage.getItem(`reduxPersist:categories`));
    if (cachedData && cachedData.list) {
      /* local-storage strategy */
    } else {
      // this.store.dispatch(this.listActions.loadList(AJAX_LIST_TYPES.CATEGORIES));
    }

    this.categorySubscription$ = this.categories$.subscribe(root => {
      if (root) {
        this.model = {};
      }
    });
  }

  ngOnDestroy() {
    if (this.categorySubscription$) {
      this.categorySubscription$.unsubscribe();
    }
  }

}
