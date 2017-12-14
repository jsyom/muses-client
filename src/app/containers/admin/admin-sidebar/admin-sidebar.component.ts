import {Component, Input, OnInit, ViewEncapsulation, ChangeDetectionStrategy, OnDestroy} from '@angular/core';
import {ADMIN_NAV} from '../admin.consts';
import {NgRedux, select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'ms-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminSidebarComponent implements OnInit, OnDestroy {
  @select(['router']) readonly route$: Observable<string>;
  @Input() logoutRedirectUrl: string;
  isSearchSidebarOpen: boolean = false;
  isCreateSidebarOpen: boolean = false;

  sidebarNav = ADMIN_NAV;

  routeSubscription$;

  // activeRoute: string;
  @Input() activeSubNav: any[] = [];
  constructor() {
    this.onRouteSubscription = this.onRouteSubscription.bind(this);
  }

  ngOnInit() {
    this.routeSubscription$ = this.route$.subscribe(this.onRouteSubscription)
  }

  onRouteSubscription(route) {
    const activeGroup: any = this.sidebarNav.find(navGroup => (route.includes(navGroup.path)));
    this.activeSubNav = activeGroup && activeGroup.children ? activeGroup.children : [];
    console.log('activeGroup', this.activeSubNav);
    // return route;
  }

  ngOnDestroy() {
    if (this.routeSubscription$) {
      this.routeSubscription$.unsubscribe();
    }
  }

  handleSearchExpand(isExpanded: boolean) {
    this.isSearchSidebarOpen = isExpanded;
  }
  handleCreateExpand(isExpanded: boolean) {
    this.isCreateSidebarOpen = isExpanded;
  }
  toggleActionSidebar(e: any) {
    const id = e.target.id;
    switch (id) {
      case 'search-action-btn':
        this.isSearchSidebarOpen = !this.isSearchSidebarOpen;
        break;
      case 'create-action-btn':
        this.isCreateSidebarOpen = !this.isCreateSidebarOpen;
        break;
    }
  }
}
