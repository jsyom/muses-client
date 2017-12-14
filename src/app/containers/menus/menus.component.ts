import { Component } from '@angular/core';
import { MENU } from './menus';

@Component({
  selector: 'ms-menus',
  template: `
    <div *ngFor="let category of menu">
      {{category.label}}
    </div>
  `,
  styleUrls: ['./menus.component.scss']
})
export class MenusComponent {

  public menu = MENU;

}
