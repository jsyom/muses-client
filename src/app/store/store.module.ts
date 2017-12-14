import {NgModule} from '@angular/core';

// Angular-redux ecosystem stuff.
// @angular-redux/form and @angular-redux/router are optional
// extensions that sync form and route location state between
// our store and Angular.
import {NgReduxModule, NgRedux, DevToolsExtension} from '@angular-redux/store';
import {NgReduxRouterModule, NgReduxRouter} from '@angular-redux/router';
import {provideReduxForms} from '@angular-redux/form';

// The top-level reducers and epics that make up our app's logic.
import {IAppState} from './root.types';
import {rootReducer} from './root.reducer';
import {RootEpics} from './root.epics';
import {AjaxItemModule, AjaxListModule} from 'ng-capsule9/src/lib/ajax'

// Hack to avoid "Initializers are not allowed in ambient contexts.  webpack: Failed to compile."
const persistStore = require('redux-persist').persistStore;
const autoRehydrate = require('redux-persist').autoRehydrate;

@NgModule({
  imports: [
    NgReduxModule,
    NgReduxRouterModule,
    AjaxItemModule,
    AjaxListModule
  ],
  providers: [RootEpics],
})
export class StoreModule {
  constructor(public store: NgRedux<IAppState>,
              devTools: DevToolsExtension,
              ngReduxRouter: NgReduxRouter,
              rootEpics: RootEpics ) {
    // Tell Redux about our reducers and epics. If the Redux DevTools
    // chrome extension is available in the browser, tell Redux about
    // it too.
    store.configureStore(
      rootReducer,
      {},
      [/*createLogger(),*/ ...rootEpics.createEpics()],
      devTools.isEnabled() ? [autoRehydrate(), devTools.enhancer()] : [autoRehydrate()]);

    // Enable syncing of Angular router state with our Redux store.
    ngReduxRouter.initialize();

    // Enable syncing of Angular form state with our Redux store.
    provideReduxForms(store);

    // begin periodically persisting the store
    /*
     * localStorage blacklist:
     * -----------------------
     * census: Since individual census data is so large when user filters approx. more then 30 days.
     *         Storing the data to localStorage causes
     *         QuotaExceededError: Failed to execute 'setItem' on 'Storage':
     *                             Setting the value of 'reduxPersist:census' exceeded the quota.
     */
    persistStore(store, {blacklist: ['router']});

  }
}
