import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ItemCardapioModel} from "./item-cardapio.model";

@Component({
  selector: 'app-item-cardapio',
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
