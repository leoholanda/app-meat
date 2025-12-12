import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {RestaurantsService} from "../../restaurants/restaurants.service";
import {ActivatedRoute} from "@angular/router";
import {NgFor, NgIf, AsyncPipe, DatePipe} from "@angular/common";

@Component({
  selector: 'app-avaliacoes',
  standalone: true,
  imports: [NgFor, NgIf, AsyncPipe, DatePipe],
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
