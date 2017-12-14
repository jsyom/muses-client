import { TestBed, inject } from '@angular/core/testing';

import { TwitterEmbedService } from './twitter.service';
import {DocumentRef, WindowRef} from '../../common/browser-globals.service';

describe('TwitterEmbedService', () => {

  const windowRefStub = {
    getNativeWindow: () => ({twttr: {}})
  };

  const documentRefStub = {
    getNativeDocument: () => ({
      getElementsByTagName: (str) => ([{}, {}]),
      getElementById: (str) => {}
    })
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: WindowRef, useValue: windowRefStub },
        { provide: DocumentRef, useValue: documentRefStub },
        TwitterEmbedService
      ]
    });
  });

  it('should be created', inject([TwitterEmbedService], (service: TwitterEmbedService) => {
    expect(service).toBeTruthy();
  }));
});
