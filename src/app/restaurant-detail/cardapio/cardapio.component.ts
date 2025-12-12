import {Component, OnInit} from '@angular/core';
import {RestaurantsService} from "../../restaurants/restaurants.service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {ItemCardapioModel} from "../item-cardapio/item-cardapio.model";
import {NgFor, AsyncPipe} from "@angular/common";
import {ItemCardapioComponent} from "../item-cardapio/item-cardapio.component";
import {ShoppingCartComponent} from "../shopping-cart/shopping-cart.component";

@Component({
  selector: 'app-cardapio',
  standalone: true,
  imports: [NgFor, AsyncPipe, ItemCardapioComponent, ShoppingCartComponent],
  templateUrl: './cardapio.component.html'
})
export class CardapioComponent implements OnInit{

  menu?: Observable<ItemCardapioModel[]>

  constructor(private restaurantsService: RestaurantsService,
              private route: ActivatedRoute) {
  }
  ngOnInit() {
    this.menu = this.restaurantsService
      .findCardapioByRestaurant(this.route.parent?.snapshot.params['id'])
  }

  addMenuItem(item: ItemCardapioModel) {
    console.log(item)
  }

}
