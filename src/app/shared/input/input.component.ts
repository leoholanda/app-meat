import {AfterContentInit, Component, ContentChild, Input} from '@angular/core';
import {NgModel} from "@angular/forms";

@Component({
  selector: 'app-input-container',
  templateUrl: './input.component.html'
})
export class InputComponent implements AfterContentInit {

  @Input() label?: string
  @Input() errorMessage?: string

  input: any

  @ContentChild(NgModel) model?: NgModel

  constructor() {
  }

  ngAfterContentInit() {
    this.input = this.model;
    if(this.input === undefined) {
      throw new Error('Esse componente precisa ser usado com uma diretiva ngModel')
    }
  }

  hasSuccess(): boolean {
    return this.input.valid && (this.input.dirty || this.input.touched)
  }

  hasError(): boolean {
    return this.input.invalid && (this.input.dirty || this.input.touched)
  }

}
