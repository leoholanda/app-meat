import {Component, Input, forwardRef} from '@angular/core';
import {RadioOptionModel} from "./radio-option.model";
import {NG_VALUE_ACCESSOR, ControlValueAccessor, FormsModule} from "@angular/forms";
import {NgFor} from "@angular/common";

@Component({
  selector: 'app-radio',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './radio.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioComponent),
      multi: true
    }
  ]
})
export class RadioComponent implements ControlValueAccessor {

  @Input() options: RadioOptionModel[] = [];

  value: any;
  onChange: any;

  setValue(value: any) {
    this.value = value;
    this.onChange(this.value);
  }

  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) { }

  setDisabledState(isDisabled: boolean) { }
}
