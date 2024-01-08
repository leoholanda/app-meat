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
    AvaliacoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [RestaurantsService, {provide: LOCALE_ID, useValue: 'pt'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
