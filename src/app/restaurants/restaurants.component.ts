import {Component, OnInit} from '@angular/core';
import {Restaurant} from "./restaurant/restaurant.model";
import {RestaurantsService} from "./restaurants.service";

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[] = []

  constructor(private restaurantsService: RestaurantsService) {
  }

  ngOnInit() {

    this.restaurantsService.findByRestaurants()
      .subscribe(restaurants => {
        this.restaurants = restaurants
          .sort((a,b) => {

            if (a.favorite && !b.favorite) return -1;
            if (!a.favorite && b.favorite) return 1;

            return a.name.localeCompare(b.name);

          })});

  }

}
