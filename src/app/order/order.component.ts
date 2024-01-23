import { Component } from '@angular/core';
import {RadioOptionModel} from "../shared/radio/radio-option.model";
import {OrderService} from "./order.service";
import {CarItem} from "../restaurant-detail/shopping-cart/item-cart.model";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html'
})
export class OrderComponent {

  delivery: number = 0;

  paymentOptions: RadioOptionModel[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de Débito', value: 'DEB'},
    {label: 'Cartão de Crédito', value: 'CRE'},
    {label: 'Catão de Refeição', value: 'REF'}
  ];

  constructor(private orderService: OrderService) {
  }

  itemsValue(): number {
    return this.orderService.itemsValue();
  }

  cartItems(): CarItem[] {
    return this.orderService.cartItems();
  }

  increaseQty(item: CarItem) {
    this.orderService.increaseQty(item);
  }

  decreaseQty(item: CarItem) {
    this.orderService.decreaseQty(item);
  }

  remove(item: CarItem) {
    this.orderService.remove(item);
  }

}
