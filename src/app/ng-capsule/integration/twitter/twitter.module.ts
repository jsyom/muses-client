import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {CapsuleCommonModule} from '../../common/common.module';
import {TwitterEmbedService} from './twitter.service';
import { TwitterTimelineComponent } from './twitter-timeline/twitter-timeline.component';

@NgModule({
  imports: [
    CommonModule,
    CapsuleCommonModule
  ],
  declarations: [TwitterTimelineComponent],
  providers: [TwitterEmbedService],
  exports: [TwitterTimelineComponent]
})
export class TwitterModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TwitterModule,
      providers: []
    };
  }
}
