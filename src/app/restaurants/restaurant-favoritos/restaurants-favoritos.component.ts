import {Component, OnInit} from '@angular/core';
import {RestaurantsService} from "../restaurants.service";
import {Restaurant} from "../restaurant/restaurant.model";

@Component({
  selector: 'app-restaurants-favoritos',
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
