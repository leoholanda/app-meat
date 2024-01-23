import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CarItem} from "../../restaurant-detail/shopping-cart/item-cart.model";

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html'
})
export class OrderItemsComponent {

  @Input() items: CarItem[] = []
  @Output() increaseQty = new EventEmitter<CarItem>()
  @Output() decreaseQty = new EventEmitter<CarItem>()
  @Output() remove = new EventEmitter<CarItem>()

  emitIncreaseQty(item: CarItem) {
    this.increaseQty.emit(item)
  }

  emitDecreaseQty(item: CarItem) {
    this.decreaseQty.emit(item)
  }

  emitRemove(item: CarItem) {
    this.remove.emit(item)
  }

}
