import {Component, Input} from '@angular/core';
import {RadioOptionModel} from "./radio-option.model";

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html'
})
export class RadioComponent {

  @Input() options: RadioOptionModel[] = [];

  value: any;

  setValue(value: any) {
    this.value = value;
  }
}
