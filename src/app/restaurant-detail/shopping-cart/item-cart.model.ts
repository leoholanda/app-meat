import {ItemCardapioModel} from "../item-cardapio/item-cardapio.model";

export class CarItem {
  constructor(public itemCardapio: ItemCardapioModel,
              public quantidade: number = 1) {}

  value(): number {
    return this.itemCardapio.price * this.quantidade
  }

}
