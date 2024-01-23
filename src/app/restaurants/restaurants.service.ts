import {Restaurant} from "./restaurant/restaurant.model";
import {MEAT_API} from "../../app.api";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {filter, Observable} from "rxjs";

@Injectable()
export class RestaurantsService {
  constructor(private http: HttpClient) {
  }

  findByRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`)
  }

  findRestaurantById(id: string): Observable<Restaurant> {
    return this.http.get<Restaurant>(`${MEAT_API}/restaurants/${id}`)
  }

  findReviewsByRestaurants(id: string): Observable<any> {
    return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
  }

  findCardapioByRestaurant(id: string): Observable<any> {
    return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
  }

  saveRestaurant(selectRestaurant: Restaurant) {
      if(!selectRestaurant.id) {
        return this.http.post(`${MEAT_API}/restaurants/restaurant`, selectRestaurant);
      } else {
        console.log(`saveRestaurant: ${selectRestaurant.favorite}`)
        return this.http.put(`${MEAT_API}/restaurants/${selectRestaurant.id}`, selectRestaurant);
      }
  }

}
