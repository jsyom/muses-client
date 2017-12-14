import { Injectable } from '@angular/core';
import {AJAX_ITEM_TYPES, AJAX_LIST_TYPES} from './root.types';
import {
  AjaxItemEpics, AjaxItemActions,
  AjaxListEpics
} from 'ng-capsule9/src/lib/ajax';
import { AUTH_TYPES } from 'ng-capsule9/src/lib/auth/auth.type';

@Injectable()
export class RootEpics {
  constructor(
    private itemEpics: AjaxItemEpics,
    private listEpics: AjaxListEpics
  ) { }

  public createEpics() {
    return [
      this.itemEpics.createEpic(AJAX_ITEM_TYPES.USER),
      this.itemEpics.createEpic(AUTH_TYPES.TOKEN),
      this.itemEpics.createSimpleEpic({
        action: {
          type: '@angular-redux/router::UPDATE_LOCATION',
          payload: '/admin/dashboard'
        },
        filter: 'token',
        trigger: AjaxItemActions.LOAD_SUCCEEDED
      }),
      // this.itemEpics.createSimpleEpic({
      //   action: {
      //     type: '@angular-redux/router::UPDATE_LOCATION',
      //     payload: ''
      //   },
      //   trigger: 'LOG_OUT'
      // }),
      // this.itemEpics.createEpic(AJAX_ITEM_TYPES.CATEGORY),
      // this.listEpics.createEpic(AJAX_LIST_TYPES.CATEGORIES),
      this.itemEpics.createEpic(AJAX_ITEM_TYPES.PRODUCT),
      this.listEpics.createEpic(AJAX_LIST_TYPES.PRODUCTS),
      this.listEpics.createEpic(AJAX_LIST_TYPES.PRODUCTS_SKU),
      this.listEpics.createEpic(AJAX_LIST_TYPES.PRODUCT_TYPES),
      this.listEpics.createEpic(AJAX_LIST_TYPES.ATTRIBUTES),
      this.listEpics.createEpic(AJAX_LIST_TYPES.ATTRIBUTE_VALUES),
    ];
  }
}
