import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-delivery-costs',
  templateUrl: './delivery-costs.component.html',
  styleUrls: ['./delivery-costs.component.css']
})
export class DeliveryCostsComponent {

  @Input() delivery: number = 0
  @Input() itemsValue: number = 0

  constructor() {
  }

  total(): number {
    return this.delivery + this.itemsValue;
  }

}
