import { NgModule } from '@angular/core';
import { TwitterModule } from './twitter/twitter.module';

const CAPSULE_INTEGRATION_MODULES = [
  TwitterModule
];

@NgModule({
  imports: CAPSULE_INTEGRATION_MODULES,
  exports: CAPSULE_INTEGRATION_MODULES
})
export class CapsuleIntegrationModule { }
