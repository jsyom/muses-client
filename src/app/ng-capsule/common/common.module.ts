import {NgModule} from '@angular/core';
import {ResizeService} from './resize.service';
import {BROWSER_GLOBALS_PROVIDERS} from './browser-globals.service';

@NgModule({
  providers: [
    ResizeService,
    ...BROWSER_GLOBALS_PROVIDERS
  ]
})
export class CapsuleCommonModule { }
