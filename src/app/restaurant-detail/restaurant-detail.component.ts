import {Component, OnInit} from '@angular/core';
import {RestaurantsService} from "../restaurants/restaurants.service";
import {Restaurant} from "../restaurants/restaurant/restaurant.model";
import {ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {NgIf, CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-restaurant-detail',
  standalone: true,
  imports: [NgIf, CurrencyPipe, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit{

  restaurant?: Restaurant;

  constructor(private restauranteService: RestaurantsService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.restauranteService.findRestaurantById(this.route.snapshot.params['id'])
      .subscribe(restaurant => this.restaurant = restaurant)
  }

  favoriteRestaurant() {
      if (this.restaurant) {
        this.restaurant.favorite = !this.restaurant.favorite
        this.restauranteService.favoriteRestaurant(this.restaurant).subscribe(
          resp => console.log(resp)
        )
      }
  }

  backRestaurants() {
    this.router.navigate(['/restaurants']);
  }

}
