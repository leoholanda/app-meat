import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {RestaurantsService} from "../../restaurants/restaurants.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-avaliacoes',
  templateUrl: './avaliacoes.component.html'
})
export class AvaliacoesComponent implements OnInit{

  reviews?: Observable<any>

  constructor(private restaurantsService: RestaurantsService,
              private route: ActivatedRoute) {
  }
  ngOnInit() {
    this.reviews = this.restaurantsService
      .findReviewsByRestaurants(this.route.parent?.snapshot.params['id'])
  }

}
