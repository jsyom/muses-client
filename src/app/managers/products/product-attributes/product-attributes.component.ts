import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'ms-product-attributes',
  templateUrl: './product-attributes.component.html',
  styleUrls: ['./product-attributes.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductAttributesComponent implements OnInit {

  @Input() product: any;

  constructor() { }

  ngOnInit() {
  }

}
