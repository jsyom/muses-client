import {Component, OnDestroy, OnInit, ChangeDetectionStrategy, ViewEncapsulation} from '@angular/core';
import {select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import {PRODUCTS_MANAGER_NAV} from '../products.consts';

@Component({
  selector: 'ms-products-manager',
  template: `
    <div class="container is-fluid">

      <!--<ms-sticky>-->
        <nav class="level">
          <!-- Left side -->
          <div class="level-left">
            <div class="level-item">
              <h3 class="title is-3">{{pageTitle}}</h3>
            </div>
          </div>

          <!-- Right side -->
          <div class="level-right">
            <div class="level-item">
              <nav class="breadcrumb" aria-label="breadcrumbs">
                <ul>
                  <li><a routerLink="/admin/products">Products</a></li>
                  <li class="is-active">
                    <a routerLink="/admin/products">{{pageTitle}}</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </nav>
      <!--</ms-sticky>-->

      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./products-manager.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsManagerComponent implements OnInit, OnDestroy {

  @select(['router']) readonly route$: Observable<string>;

  routerSubscription$: Subscription;
  navigations: any = PRODUCTS_MANAGER_NAV;

  pageTitle: string;

  ngOnInit() {
    this.routerSubscription$ = this.route$.subscribe((activeRoute: string) => {
      const activeChild = this.navigations.children.find(item => (activeRoute.includes(item.path)));
      if (activeChild) {
        this.pageTitle = activeChild.label;
      } else {
        switch (activeRoute) {
          case '/admin/products/new':
            this.pageTitle = 'Create new product';
            break;
        }
      }
      return;
    });
  }

  ngOnDestroy() {
    if (this.routerSubscription$) {
      this.routerSubscription$.unsubscribe();
    }
  }

}



