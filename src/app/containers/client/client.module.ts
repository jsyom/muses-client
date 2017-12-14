import {NgModule} from '@angular/core';
import {ClientComponent} from './client.component';
import {NavbarModule} from '../../ng-capsule/design/navbar/navbar.module';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AgmCoreModule} from '@agm/core';
import {LogoModule} from '../../components/logo/logo.module';
import {TwitterModule} from '../../ng-capsule/integration/twitter/twitter.module';
import {CapsuleCommonModule} from '../../ng-capsule/common/common.module';

@NgModule({
  declarations: [ClientComponent],
  exports: [ClientComponent],
  imports: [
    CommonModule,
    NavbarModule,
    RouterModule,
    LogoModule,
    /* ng-capsule9/integration */
    TwitterModule,
    /* ng-capsule9/common */
    CapsuleCommonModule
  ]
})
export class ClientModule { }
