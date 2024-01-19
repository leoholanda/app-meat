import { Component } from '@angular/core';
import {RadioOptionModel} from "../shared/radio/radio-option.model";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html'
})
export class OrderComponent {

  paymentOptions: RadioOptionModel[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de Débito', value: 'DEB'},
    {label: 'Cartão de Crédito', value: 'CRE'},
    {label: 'Catão de Refeição', value: 'REF'}
  ];

}
