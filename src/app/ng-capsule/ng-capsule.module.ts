import { NgModule } from '@angular/core';
import { CapsuleCommonModule } from './common/common.module';
import { CapsuleDesignModule } from './design/design.module';
import { CapsuleIntegrationModule } from './integration/integration.module';


const CAPSULE_MODULES = [
  CapsuleCommonModule,
  CapsuleDesignModule,
  CapsuleIntegrationModule,
];
@NgModule({
  imports: CAPSULE_MODULES,
  exports: CAPSULE_MODULES
})
export class NgCapsuleModule { }
