import {Component, Input} from '@angular/core';
import {Restaurant} from "./restaurant.model";
import {RouterLink} from "@angular/router";
import {NgOptimizedImage, NgIf} from "@angular/common";

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [RouterLink, NgOptimizedImage, NgIf],
  templateUrl: './restaurant.component.html'
})
export class RestaurantComponent {

  @Input() restaurant?: Restaurant

  constructor() {
  }

}
