import { AUTH_TYPES } from 'ng-capsule9/src/lib/auth/auth.type';

export interface IAppState {
  routes?: any;
}

// list of AJAX ITEM action constants
// AJAX LIST returns object data type
export const AJAX_ITEM_TYPES = {
  USER: 'USER',
  CATEGORY: 'CATEGORY',
  PRODUCT: 'PRODUCT',
  PRODUCTS_BY_CATEGORIES: 'PRODUCTS_BY_CATEGORIES'
};

// list of AJAX LIST action constants
// AJAX LIST returns array data type
export const AJAX_LIST_TYPES = {
  USERS: 'USERS',
  ATTRIBUTES: 'ATTRIBUTES',
  ATTRIBUTE_VALUES: 'ATTRIBUTE_VALUES',
  PRODUCTS: 'PRODUCTS',
  PRODUCTS_SKU: 'PRODUCTS_SKU',
  PRODUCT_TYPES: 'PRODUCT_TYPES',
};

// list of AJAX ITEM API action constants
export const AJAX_ITEM_API_URL = {
  TOKEN: '/api/auth/token',
  USER: '/api/users',
  PRODUCT: '/api/products',
  PRODUCTS_BY_CATEGORIES: '/api/products/by_categories'
};

export const AJAX_LIST_API_URL = {
  USERS: '/api/users',
  ATTRIBUTES: '/api/attributes',
  ATTRIBUTE_VALUES: '/api/attribute_values',
  PRODUCTS: '/api/products',
  PRODUCTS_SKU: '/api/products_sku',
  PRODUCT_TYPES: '/api/product_types',
};
