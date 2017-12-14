/*
 * --------------------
 * PRODUCTS_MANAGER_NAV
 * --------------------
 * following constance is used by sidebar and breadcrumbs
 *
 */
export const PRODUCTS_MANAGER_NAV = {
  path: '/admin/products', label: 'products', icon: 'cubes',
  children: [
    { type: 'header', label: 'General' },
    { type: 'item', path: '/admin/products/list', label: 'Manage Products' },
    { type: null, path: '/admin/products/edit', label: 'Edit Product', parameter: 'id' },
    { type: null, path: '/admin/products/new', label: 'New Product' },
    { type: 'item', path: '/admin/products/categories', label: 'Manage Categories' },
    { type: 'item', path: '/admin/products/packages', label: 'Package Products' },
    { type: 'item', path: null, label: 'Inventory', disabled: true },
    { type: 'divider' },
    { type: 'header', label: 'Configurations' },
    { type: 'item', path: '/admin/products/attributes', label: 'Attributes' }
  ]
};
