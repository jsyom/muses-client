import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import {LogoComponent} from '../../components/logo/logo.component';

import { MockComponent } from 'ng2-mock-component';
import {DiscoballComponent} from '../../components/discoball/discoball.component';
import {D3Service} from 'd3-ng2-service';
const MockAgmMapComponent = MockComponent({
  selector: 'agm-map',
  inputs: ['zoom', 'minZoom', 'maxZoom', 'latitude', 'longitude', 'draggable', 'styles'],
  outputs: ['zoom', 'minZoom', 'maxZoom', 'latitude', 'longitude', 'draggable', 'styles']
});

const MockAgmMarkerComponent = MockComponent({
  selector: 'agm-marker',
  inputs: ['latitude', 'longitude']
});

const MockTwitterTimelineComponent = MockComponent({
  selector: 'ms-twitter-timeline',
  inputs: ['dataSrc', 'opts'],
  outputs: ['dataSrc', 'opts']
});

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        LogoComponent,
        DiscoballComponent,
        MockAgmMapComponent,
        MockAgmMarkerComponent,
        MockTwitterTimelineComponent
      ],
      providers: [D3Service]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
