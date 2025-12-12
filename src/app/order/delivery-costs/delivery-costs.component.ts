import {Component, Input} from '@angular/core';
import {Restaurant} from "../../restaurants/restaurant/restaurant.model";
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-delivery-costs',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './delivery-costs.component.html',
  styleUrls: ['./delivery-costs.component.css']
})
export class DeliveryCostsComponent {

  @Input() restaurant?: Restaurant;
  @Input() itemsValue: number = 0

  constructor() {
  }

  total(): number {
    if(this.restaurant !== undefined) {
      return this.restaurant?.deliveryPrice + this.itemsValue;
    }
    return 0;
  }

}
