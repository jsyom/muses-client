import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { MAP_STYLE } from '../../consts'

@Component({
  selector: 'ms-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  mapStyle = MAP_STYLE;

  constructor() { }

  ngOnInit() {
  }

}
