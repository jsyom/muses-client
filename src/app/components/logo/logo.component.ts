import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'ms-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {
  @ViewChild('logo') public logo: ElementRef;

  @Input() width: number;

  constructor() { }

  ngOnInit() {
    if (!this.width) {
      this.width = 500;
    }
  }

}
