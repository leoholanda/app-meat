import {Component, OnInit} from '@angular/core';
import {RestaurantsService} from "../restaurants/restaurants.service";
import {Restaurant} from "../restaurants/restaurant/restaurant.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit{

  restaurant?: Restaurant;

  constructor(private restauranteService: RestaurantsService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.restauranteService.findRestaurantById(this.route.snapshot.params['id'])
      .subscribe(restaurant => this.restaurant = restaurant)
  }

}
