import { Injectable } from '@angular/core';
import {ItemCardapioModel} from "../item-cardapio/item-cardapio.model";
import {CarItem} from "./item-cart.model";

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  items: CarItem[] = []

  constructor() { }

  clear() {
    this.items = []
  }

  addItem(itemCardapio: ItemCardapioModel) {
    let foundItem = this.items.find(
      (mItem)=> mItem.itemCardapio.id === itemCardapio.id)

    if(foundItem){
      this.increaseQty(foundItem)
    }else {
      this.items.push(new CarItem(itemCardapio))
    }
  }

  remoteItem(item: CarItem) {
    this.items.splice(this.items.indexOf(item), 1)
  }

  total(): number {
    return this.items.map(item => item.value())
      .reduce((prev, value)=> prev + value, 0);
  }

  increaseQty(item: CarItem) {
    item.quantidade++;
  }

  decreaseQty(item: CarItem) {
    item.quantidade--;
    if(item.quantidade ===0 ) {
      this.remoteItem(item)
    }
  }
}
