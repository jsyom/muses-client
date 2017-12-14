import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import {DocumentRef, WindowRef} from '../../common/browser-globals.service';

@Injectable()
export class TwitterEmbedService {
  readonly TWITTER_SCRIPT_ID = 'twitter-wjs';
  readonly TWITTER_WIDGET_URL = 'https://platform.twitter.com/widgets.js';

  constructor(
    private windowRef: WindowRef,
    private documentRef: DocumentRef
  ) {
    this.LoadScript = this.LoadScript.bind(this);
    this.startScriptLoad = this.startScriptLoad.bind(this);
    this.getTwitter = this.getTwitter.bind(this);
    this.setTwitter = this.setTwitter.bind(this);
  }

  getTwitter() {
    return this.windowRef.getNativeWindow()['twttr'];
  }

  setTwitter() {
    let js;
    const doc = this.documentRef.getNativeDocument();
    const fjs = doc.getElementsByTagName('script')[0],
          t = this.getTwitter() || {};

    if (doc.getElementById(this.TWITTER_SCRIPT_ID)) {
      return t;
    }

    js = doc.createElement('script');
    js.id = this.TWITTER_SCRIPT_ID;
    js.src = this.TWITTER_WIDGET_URL;
    fjs.parentNode.insertBefore(js, fjs);

    t._e = [];

    t.ready = (f) => {
      t._e.push(f);
    };

    this.windowRef.getNativeWindow()['twttr'] = t;
  }

  LoadScript(): Observable<any> {

    return Observable.create(observer => {
      // START LOADING SCRIPT INTO DOM
      this.startScriptLoad();

      // WHEN TWITTER WIDGETS SCRIPT IS LOADED, THEN PASS ALONG....
      this.getTwitter().ready(
        function onLoadTwitterScript(twttr) {
          observer.next(twttr);
          observer.complete();
        }
      );
    });
  };

  private startScriptLoad() {
    this.setTwitter();
  }
}
