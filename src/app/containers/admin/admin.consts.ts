import {PRODUCTS_MANAGER_NAV} from '../../managers/products/products.consts';

export const ADMIN_NAV = [
  {
    path: '/admin/dashboard', label: 'dashboard', icon: 'dashboard'
  },
  PRODUCTS_MANAGER_NAV,
  {
    path: '/admin/members', label: 'members', icon: 'user'
  },
  {
    path: '/admin/reports', label: 'reports', icon: 'area-chart'
  }
];
