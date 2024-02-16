import { LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';

import { RestaurantsService } from "./restaurants/restaurants.service";
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { CardapioComponent } from './restaurant-detail/cardapio/cardapio.component';
import { ShoppingCartComponent } from './restaurant-detail/shopping-cart/shopping-cart.component';
import { ItemCardapioComponent } from './restaurant-detail/item-cardapio/item-cardapio.component';
import { AvaliacoesComponent } from './restaurant-detail/avaliacoes/avaliacoes.component';

import ptBR from '@angular/common/locales/pt'
import {registerLocaleData} from "@angular/common";
import { OrderComponent } from './order/order.component';
import {FormsModule} from "@angular/forms";
import { InputComponent } from './shared/input/input.component';
import { RadioComponent } from './shared/radio/radio.component';
import { OrderItemsComponent } from './order/order-items/order-items.component';
import { RestaurantsFavoritosComponent } from './restaurants/restaurant-favoritos/restaurants-favoritos.component';
import { DeliveryCostsComponent } from './order/delivery-costs/delivery-costs.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { RestaurantOrderComponent } from './order/restaurant-order/restaurant-order.component';
import { RatingComponent } from './shared/rating/rating.component';


registerLocaleData(ptBR);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    CardapioComponent,
    ShoppingCartComponent,
    ItemCardapioComponent,
    AvaliacoesComponent,
    OrderComponent,
    InputComponent,
    RadioComponent,
    OrderItemsComponent,
    RestaurantsFavoritosComponent,
    DeliveryCostsComponent,
    OrderSummaryComponent,
    RestaurantOrderComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [RestaurantsService, {provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
