import {Component, Input, OnInit} from '@angular/core';
import {ShoppingCartService} from "./shopping-cart.service";
import {RestaurantsService} from "../../restaurants/restaurants.service";
import {ActivatedRoute} from "@angular/router";
import {Restaurant} from "../../restaurants/restaurant/restaurant.model";
import {ItemCardapioModel} from "../item-cardapio/item-cardapio.model";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit{

  restaurant?: Restaurant;

  constructor(private shoppingCartService: ShoppingCartService,
              private restaurantsService: RestaurantsService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  items(): any[] {
    return this.shoppingCartService.items;
  }

  total(): number {
    return this.shoppingCartService.total()
  }

  clear() {
    this.shoppingCartService.clear();
  }

  removeItem(item: any){
    this.shoppingCartService.remoteItem(item)
  }

  addItem(item: any) {
    this.shoppingCartService.addItem(item)
  }

}
