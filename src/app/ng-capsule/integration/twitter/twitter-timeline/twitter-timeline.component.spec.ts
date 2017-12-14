import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterTimelineComponent } from './twitter-timeline.component';
import {TwitterEmbedService} from '../twitter.service';
import {DocumentRef, WindowRef} from '../../../common/browser-globals.service';
import {Observable} from 'rxjs/Observable';
import {Subscriber} from 'rxjs/Subscriber';

describe('TwitterTimelineComponent', () => {
  let component: TwitterTimelineComponent;
  let fixture: ComponentFixture<TwitterTimelineComponent>;

  const windowRefStub = {
    getNativeWindow: () => ({twttr: {}})
  };

  const documentRefStub = {
    getNativeDocument: () => ({
      getElementsByTagName: (str) => ([{}, {}]),
      getElementById: (str) => {}
    })
  };

  const twitterEmbedServiceStub = {
    LoadScript: () => ({
      subscribe: (next, error, complete) => next()
    }),
    getTwitter: () => ({
      widgets: {
        createTimeline: (dataSrc, elem, opt) => Promise.resolve()
      }
    })
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitterTimelineComponent ],
      providers: [
        { provide: WindowRef, useValue: windowRefStub },
        { provide: DocumentRef, useValue: documentRefStub },
        { provide: TwitterEmbedService, useValue: twitterEmbedServiceStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
