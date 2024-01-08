import {Component, Input} from '@angular/core';
import {Restaurant} from "./restaurant.model";

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html'
})
export class RestaurantComponent {

  @Input() restaurant?: Restaurant

  constructor() {
  }

}
