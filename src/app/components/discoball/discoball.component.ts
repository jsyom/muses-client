import {Component, ElementRef, OnInit, ViewEncapsulation} from '@angular/core';
import {D3, D3Service, Selection} from 'd3-ng2-service';

@Component({
  selector: 'ms-discoball',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./discoball.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DiscoballComponent implements OnInit {

  private d3: D3; // <-- Define the private member which will hold the d3 reference
  private parentNativeElement: any;

  constructor(element: ElementRef, d3Service: D3Service) { // <-- pass the D3 Service into the constructor
    this.d3 = d3Service.getD3(); // <-- obtain the d3 object from the D3 Service
    this.parentNativeElement = element.nativeElement;
  }

  ngOnInit() {
    if (this.parentNativeElement !== null) {

      this.initDiscoBall();

    }
  }

  initDiscoBall() {
    const d3 = this.d3; // <-- for convenience use a block scope variable
    let d3ParentElement: Selection<any, any, any, any>; // <-- Use the Selection interface (very basic here for illustration only)

    d3ParentElement = d3.select(this.parentNativeElement); // <-- use the D3 select method

    const radius = 150;
    const squareSize = 19;
    const prec = 19.55;
    const fuzzy = 0.001;
    const inc = (Math.PI - fuzzy) / prec;

    // const svg = d3ParentElement.append('div')
    //   .attrs({ width: 500, height: 500 });

    const ballLight = d3ParentElement.append('div').attrs({
      id: 'discoBallLight'
    });
    const ball = d3ParentElement.append('div').attrs({
      id: 'discoBall'
    });

    const ballMiddle = ball.append('div').attrs({
      id: 'discoBallMiddle'
    });

    for (let t = fuzzy; t < Math.PI; t += inc) {
      const z = radius * Math.cos(t);
      const currentRadius = Math.abs((radius * Math.cos(0) * Math.sin(t)) - (radius * Math.cos(Math.PI) * Math.sin(t))) / 2.5;
      const circumference = Math.abs(2 * Math.PI * currentRadius);
      const squaresThatFit = Math.floor(circumference / squareSize);
      const angleInc = (Math.PI * 2 - fuzzy) / squaresThatFit;

      for (let i = angleInc / 2 + fuzzy; i < (Math.PI * 2); i += angleInc) {

        const x = radius * Math.cos(i) * Math.sin(t);
        const y = radius * Math.sin(i) * Math.sin(t);

        const square = ball.append('div').attrs({
          class: 'square'
        }).styles({
          webkitTransform: 'translateX(' + x + 'px) translateY(' + y + 'px) translateZ(' + z + 'px)',
          transform: 'translateX(' + x + 'px) translateY(' + y + 'px) translateZ(' + z + 'px)'
        });

        const squareTile = square.append('div')
          .attrs({
            class: 'squareTile'
          }).styles({
            width: squareSize + 'px',
            height: squareSize + 'px',
            'background-color': (t > 1.3 && t < 1.9) || (t < -1.3 && t > -1.9)
              ? this.randomColor('bright')
              : this.randomColor('any'),
            'transform-origin': '0 0 0',
            'webkit-transform-origin': '0 0 0',
            transform: 'rotate(' + i + 'rad) rotateY(' + t + 'rad)',
            'webkit-transform': 'rotate(' + i + 'rad) rotateY(' + t + 'rad)',
            animation: 'reflect 4s linear infinite',
            'animation-delay': String(this.randomNumber(0, 40) / 10) + 's',
            'backface-visibility': 'hidden'
          });
      }

    }
  }

  randomColor(type) {
    let c;
    if (type === 'bright') {
      c = this.randomNumber(130, 255);
    } else {
      c = this.randomNumber(110, 190);
    }
    return 'rgb(' + this.randomNumber(130, 255) + ',' + this.randomNumber(130, 255) + ',' + this.randomNumber(130, 255) + ')';
  }

  randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
