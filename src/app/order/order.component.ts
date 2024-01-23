import { Component } from '@angular/core';
import {RadioOptionModel} from "../shared/radio/radio-option.model";
import {OrderService} from "./order.service";
import {CarItem} from "../restaurant-detail/shopping-cart/item-cart.model";
import {Order, OrderItem} from "./order";

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

  checkOrder(order: Order) {
    order.items = this.cartItems().map(
      (item: CarItem) => new OrderItem(item.quantidade, item.itemCardapio.id))
    this.orderService.checkOrder(order)
      .subscribe((orderId: string) => {
        console.log(`Compra concluída: ${orderId}`)
        this.orderService.clear();
    })
    console.log(order)
  }

}
