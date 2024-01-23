import {Restaurant} from "./restaurant/restaurant.model";
import {MEAT_API} from "../../app.api";
import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {first, Observable} from "rxjs";

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

  favoriteRestaurant(restaurant: Restaurant) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json')

    return this.update(restaurant);

  }

  private update(retaurant: Partial<Restaurant>) {
    const url = `${MEAT_API}/restaurants/${retaurant.id}`;
    console.log(url)
    return this.http.put<Restaurant>(url, retaurant)
      .pipe(first());
  }

}
