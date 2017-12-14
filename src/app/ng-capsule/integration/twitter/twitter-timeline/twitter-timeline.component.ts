import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import {TwitterEmbedService} from '../twitter.service';

@Component({
  selector: 'ms-twitter-timeline',
  templateUrl: './twitter-timeline.component.html',
  styleUrls: ['./twitter-timeline.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class TwitterTimelineComponent implements OnInit, AfterViewInit {

  // https://dev.twitter.com/web/javascript/creating-widgets#create-timeline
  @Input() dataSrc: object;
  @Input() opts: object;

  constructor (
    private elem: ElementRef,
    private embed: TwitterEmbedService
  ) {
    this.onScriptLoad = this.onScriptLoad.bind(this);
  }

  ngOnInit() { }

  ngAfterViewInit() {
    // MAKE SURE TWITTER WIDGET SCRIPT IS LOADED IN HEAD...
    this.embed.LoadScript().subscribe(this.onScriptLoad, err => {
      console.log('****  ERROR LOADING TWITTER WIDGET', err);
    }, () => {});
  }

  onScriptLoad(twttr) {
    this.embed.getTwitter().widgets.createTimeline(
      this.dataSrc,
      this.elem.nativeElement,
      this.opts
    ).then(embed => {
      console.log('Created tweet widget: ', embed);
      // return;
    }).catch (message => {
      console.log('Could not create widget: ', message);
    });


  }

  private onTwitterLoaded(twttr) {
    console.log('TWITTER LOADED YO', twttr);
  }

}
