import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { RestaurantsComponent } from "./restaurants/restaurants.component";
import {RestaurantDetailComponent} from "./restaurant-detail/restaurant-detail.component";
import {CardapioComponent} from "./restaurant-detail/cardapio/cardapio.component";
import {AvaliacoesComponent} from "./restaurant-detail/avaliacoes/avaliacoes.component";
import {OrderComponent} from "./order/order.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'restaurants', component: RestaurantsComponent},
  {path: 'restaurants/:id', component: RestaurantDetailComponent,
    children: [
      {path: '', redirectTo: 'cardapio', pathMatch: 'full'},
      {path: 'cardapio', component: CardapioComponent},
      {path: 'avaliacoes', component: AvaliacoesComponent}
    ]
  },
  {path: 'order', component: OrderComponent},
  {path: 'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
