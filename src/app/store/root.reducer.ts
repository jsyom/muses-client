import { combineReducers } from 'redux';
import { composeReducers, defaultFormReducer } from '@angular-redux/form';
import { routerReducer } from '@angular-redux/router';
import { createItemReducer, createListReducer } from 'ng-capsule9/src/lib/ajax';
import { AJAX_ITEM_TYPES, AJAX_LIST_TYPES } from './root.types';
import { AUTH_TYPES } from 'ng-capsule9/src/lib/auth/auth.type';
// Define the global store shape by combining our application's
// reducers together into a given structure.
export const rootReducer = composeReducers(
  defaultFormReducer(),
  combineReducers({
    user: createItemReducer(AJAX_ITEM_TYPES.USER),
    router: routerReducer,
    token: createItemReducer(AUTH_TYPES.TOKEN),
    // category: createItemReducer(AJAX_ITEM_TYPES.CATEGORY),
    // categories: createListReducer(AJAX_LIST_TYPES.CATEGORIES),
    products: createListReducer(AJAX_LIST_TYPES.PRODUCTS),
    product_types: createListReducer(AJAX_LIST_TYPES.PRODUCT_TYPES),
    products_sku: createListReducer(AJAX_LIST_TYPES.PRODUCTS_SKU),
    attributes: createListReducer(AJAX_LIST_TYPES.ATTRIBUTES),
    attribute_values: createListReducer(AJAX_LIST_TYPES.ATTRIBUTE_VALUES)
    // products_by_categories: createItemReducer(AJAX_ITEM_TYPES.PRODUCTS_BY_CATEGORIES)
  }));
