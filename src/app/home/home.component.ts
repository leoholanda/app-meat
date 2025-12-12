import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RestaurantsFavoritosComponent } from '../restaurants/restaurant-favoritos/restaurants-favoritos.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RestaurantsFavoritosComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
