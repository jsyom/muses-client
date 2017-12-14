import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NgRedux, select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';
import { AjaxListActions, AjaxItemActions } from 'ng-capsule9/src/lib/ajax';
import {AJAX_LIST_TYPES, AJAX_ITEM_TYPES} from '../../../store/root.types';

@Component({
  selector: 'ms-products-list',
  templateUrl: './products-list.component.html',
  providers: [AjaxListActions],
  styleUrls: ['./products-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductsListComponent implements OnInit {

  @select(['products', 'list']) readonly products$: Observable<any>;
  @select(['products', 'error']) readonly productsError$: Observable<any>;
  @select(['products', 'loading']) readonly productsLoading$: Observable<any>;

  constructor(
    private store: NgRedux<any>,
    private listActions: AjaxListActions,
    private itemActions: AjaxItemActions
  ) { }

  ngOnInit() {
    const cachedData = JSON.parse(localStorage.getItem(`reduxPersist:products`));
    if (cachedData && cachedData.list && cachedData.list.length) {
      /* local-storage strategy */
    } else {
      this.store.dispatch(this.listActions.loadList(AJAX_LIST_TYPES.PRODUCTS));
    }
  }

  create() {
    console.log('create new product');

  }

}
