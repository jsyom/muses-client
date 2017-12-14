import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoballComponent } from './discoball.component';
import {ElementRef} from '@angular/core';
import {D3Service} from 'd3-ng2-service';

describe('DiscoballComponent', () => {
  let component: DiscoballComponent;
  let fixture: ComponentFixture<DiscoballComponent>;

  const elementRefStub = {
    nativeElement: {}
  }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscoballComponent ],
      providers: [
        { provide: ElementRef, useValue: elementRefStub },
        D3Service
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoballComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
