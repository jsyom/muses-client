import { ModuleWithProviders, NgModule } from '@angular/core';

import { LocalStorageService } from './local-storage.service';
import { ILocalStorageServiceConfig } from './local-storage.types';

@NgModule({
  providers: [
    LocalStorageService
  ]
})
export class LocalStorageModule {
  static withConfig(userConfig: ILocalStorageServiceConfig = {}): ModuleWithProviders {
    return {
      ngModule: LocalStorageModule,
      providers: [
        { provide: 'LOCAL_STORAGE_SERVICE_CONFIG', useValue: userConfig }
      ]
    }
  }
}
