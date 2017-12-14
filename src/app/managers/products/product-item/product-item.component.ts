import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { AjaxListActions } from 'ng-capsule9/src/lib/ajax';
import { AJAX_LIST_TYPES } from '../../../store/root.types';
import {LocalStorageService} from '../../../ng-capsule/local-storage/local-storage.service';
import {Select2OptionData} from 'ng2-select2';

@Component({
  selector: 'ms-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
  // providers: [LocalStorageService],
  encapsulation: ViewEncapsulation.None
})
export class ProductItemComponent implements OnInit, OnDestroy {

  @select(['router']) readonly route$: Observable<string>;
  @select(['products', 'list']) readonly products$: Observable<any[]>;
  @select(['product_types', 'list']) readonly productTypes$: Observable<any[]>;
  @select(['attributes', 'list']) readonly attributes$: Observable<any[]>;
  @select(['attribute_values', 'list']) readonly attributeValues$: Observable<any[]>;
  @select(['products_sku', 'list']) readonly productsSKU$: Observable<any[]>;

  routerSubscription$: Subscription;
  productsSubscription$: Subscription;

  product: any;
  activeId: number;

  constructor(
    private store: NgRedux<any>,
    private listActions: AjaxListActions,
    // private local: LocalStorageService
  ) { }

  ngOnInit() {
    /* In order to switch this component for new product or single product */
    this.routerSubscription$ = this.route$.subscribe((activeRoute: string) => {
      if (activeRoute.includes('new')) {
        /* for creating new product */
      } else {
        /* for editing existing product */
        this.activeId = Number(activeRoute.split('/').pop());
      }
    });

    this.productsSubscription$ = this.products$.subscribe((products: any[]) => {
      if (products && products.length) {
        this.product = products.find(product => (product.id === this.activeId));
      }
    });

    const cachedProductType = JSON.parse(localStorage.getItem(`reduxPersist:product_types`));
    if (cachedProductType && cachedProductType.list && cachedProductType.list.length) {
      /* local-storage strategy */
    } else {
      this.store.dispatch(this.listActions.loadList(AJAX_LIST_TYPES.PRODUCT_TYPES));
    }

    const cachedAttributes = JSON.parse(localStorage.getItem(`reduxPersist:attributes`));
    if (cachedAttributes && cachedAttributes.list && cachedAttributes.list.length) {
      /* local-storage strategy */
    } else {
      this.store.dispatch(this.listActions.loadList(AJAX_LIST_TYPES.ATTRIBUTES));
    }

    const cachedAttributeValues = JSON.parse(localStorage.getItem(`reduxPersist:attribute_values`));
    if (cachedAttributeValues && cachedAttributeValues.list && cachedAttributeValues.list.length) {
      /* local-storage strategy */
    } else {
      this.store.dispatch(this.listActions.loadList(AJAX_LIST_TYPES.ATTRIBUTE_VALUES));
    }

    const cachedSKU = JSON.parse(localStorage.getItem(`reduxPersist:attribute_values`));
    if (cachedSKU && cachedSKU.list && cachedSKU.list.length) {
      /* local-storage strategy */
    } else {
      this.store.dispatch(this.listActions.loadList(AJAX_LIST_TYPES.PRODUCTS_SKU));
    }
  }

  ngOnDestroy() {
    if (this.routerSubscription$) {
      this.routerSubscription$.unsubscribe();
    }

    if (this.productsSubscription$) {
      this.productsSubscription$.unsubscribe();
    }
  }

}
