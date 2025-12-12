import {Component, Input, OnInit} from '@angular/core';
import {ShoppingCartService} from "./shopping-cart.service";
import {RestaurantsService} from "../../restaurants/restaurants.service";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {Restaurant} from "../../restaurants/restaurant/restaurant.model";
import {ItemCardapioModel} from "../item-cardapio/item-cardapio.model";
import {NgIf, NgFor, CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [NgIf, NgFor, CurrencyPipe, RouterLink],
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
