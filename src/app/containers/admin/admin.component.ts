import {
  Component, ViewEncapsulation, ChangeDetectionStrategy,
  AfterViewInit, OnInit, OnDestroy
} from '@angular/core';
import {Location} from '@angular/common';
import {AuthService} from 'ng-capsule9/src/lib/auth/auth.service';
import {NgRedux, select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';
import {AJAX_ITEM_TYPES, IAppState} from '../../store/root.types';
import {Router} from '@angular/router';
import {AjaxItemActions} from 'ng-capsule9/src/lib/ajax';
import {LocalStorageService} from '../../ng-capsule/local-storage/local-storage.service';

@Component({
  selector: 'ms-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [AuthService],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class AdminComponent implements AfterViewInit, OnInit, OnDestroy {
  @select(['router']) readonly route$: Observable<string>;
  @select(['token', 'item', 'token']) readonly token$: Observable<any>;
  // @select(['token', 'error']) readonly tokenError$: Observable<any>;
  @select(['user', 'error']) readonly userError$: Observable<any>;

  loginUrl = '/admin/login';

  public tokenSubscription$;
  constructor(
    private store: NgRedux<IAppState>,
    private ajaxItem: AjaxItemActions,
    private ngRouter: Router,
    private auth: AuthService,
    public location: Location,
    // private cache: LocalStorageService
  ) {}

  ngOnInit() {
    this.tokenSubscription$ = this.auth.tokenSubscription((token: string) => {
      if (token && token !== null) {
        this.store.dispatch(this.ajaxItem.loadItem(AJAX_ITEM_TYPES.USER));
      }
    });
    if (this.auth.isAuthenticated()) {
      // console.log(this.cache.get('token'));
      // console.log('use cached token', this.auth.token);
      this.tokenSubscription$.next(this.auth.token)
    }
  }

  ngAfterViewInit() {
    // this.store.dispatch(this.ajaxItem.loadItem(ITEM_TYPES.INFO));
    // const cachedToken = this.auth.token;
    if (!this.auth.isAuthenticated() && this.location.path() !== this.loginUrl) {
      // console.log('AdminComponent | ngAfterViewInit if chachedToken');
      this.ngRouter.navigate([this.loginUrl])
    }
  }

  ngOnDestroy() {
    if (this.tokenSubscription$) {
      this.tokenSubscription$.unsubscribe();
    }
  }
}
