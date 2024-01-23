import { Injectable } from '@angular/core';
import {ShoppingCartService} from "../restaurant-detail/shopping-cart/shopping-cart.service";
import {CarItem} from "../restaurant-detail/shopping-cart/item-cart.model";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private cartService: ShoppingCartService) {
  }

  cartItems(): CarItem[] {
    return this.cartService.items;
  }

  increaseQty(item: CarItem) {
    this.cartService.increaseQty(item);
  }

  decreaseQty(item: CarItem) {
    this.cartService.decreaseQty(item);
  }

  remove(item: CarItem) {
    this.cartService.remoteItem(item);
  }

  itemsValue(): number {
    return this.cartService.total();
  }
}
