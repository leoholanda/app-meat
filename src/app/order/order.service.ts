import { Injectable } from '@angular/core';
import {ShoppingCartService} from "../restaurant-detail/shopping-cart/shopping-cart.service";
import {CarItem} from "../restaurant-detail/shopping-cart/item-cart.model";
import {Order} from "./order";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

import {MEAT_API} from "../../app.api";
import {Restaurant} from "../restaurants/restaurant/restaurant.model";
import {RestaurantsService} from "../restaurants/restaurants.service";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private cartService: ShoppingCartService,
    private restaurantService: RestaurantsService,
    private http: HttpClient) {
  }

  findRestaurantByItemCardapio(idRestaurant: string): Observable<Restaurant> {
    return this.restaurantService.findRestaurantById(idRestaurant);
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

  checkOrder(order: Order): Observable<any> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json')

    return this.http.post(`${MEAT_API}/orders`,
      order,
      {headers: headers})

  }

  clear() {
    this.cartService.clear()
  }

}
