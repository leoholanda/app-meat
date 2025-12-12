import {Component, OnInit} from '@angular/core';
import {RestaurantsService} from "../restaurants.service";
import {Restaurant} from "../restaurant/restaurant.model";
import {NgFor} from "@angular/common";
import {RestaurantComponent} from "../restaurant/restaurant.component";

@Component({
  selector: 'app-restaurants-favoritos',
  standalone: true,
  imports: [NgFor, RestaurantComponent],
  templateUrl: './restaurants-favoritos.component.html',
  styleUrls: ['./restaurants-favoritos.component.css']
})
export class RestaurantsFavoritosComponent implements OnInit {

  favorites: Restaurant[] = []

  constructor(private restaurantService: RestaurantsService) {
  }

  ngOnInit() {
    this.listaRestaurantesFavoritos()
  }

  listaRestaurantesFavoritos() {
    this.restaurantService.findByRestaurants().subscribe(
      restaurants => {
      this.favorites = restaurants.filter((restaurant) => restaurant.favorite)
    })
  }

}
