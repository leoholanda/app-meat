import {Component, Input} from '@angular/core';
import {Restaurant} from "../../restaurants/restaurant/restaurant.model";
import {Location} from "@angular/common";

@Component({
  selector: 'app-restaurant-order',
  templateUrl: './restaurant-order.component.html',
  styleUrls: ['./restaurant-order.component.css']
})
export class RestaurantOrderComponent {

  @Input() restaurant?: Restaurant

  constructor(private location: Location) {
  }

  back() {
    this.location.back();
  }
}
