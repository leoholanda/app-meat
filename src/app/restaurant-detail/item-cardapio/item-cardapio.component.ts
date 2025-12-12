import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ItemCardapioModel} from "./item-cardapio.model";
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-item-cardapio',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './item-cardapio.component.html'
})
export class ItemCardapioComponent implements OnInit{

  @Input() menuItem?: ItemCardapioModel
  @Output() add = new EventEmitter()

  ngOnInit() {
  }

  emitAddEvent() {
    this.add.emit(this.menuItem)
  }

}
