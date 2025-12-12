import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'restaurants',
    loadComponent: () => import('./restaurants/restaurants.component').then(m => m.RestaurantsComponent)
  },
  {
    path: 'restaurants/:id',
    loadComponent: () => import('./restaurant-detail/restaurant-detail.component').then(m => m.RestaurantDetailComponent),
    children: [
      { path: '', redirectTo: 'cardapio', pathMatch: 'full' },
      {
        path: 'cardapio',
        loadComponent: () => import('./restaurant-detail/cardapio/cardapio.component').then(m => m.CardapioComponent)
      },
      {
        path: 'avaliacoes',
        loadComponent: () => import('./restaurant-detail/avaliacoes/avaliacoes.component').then(m => m.AvaliacoesComponent)
      }
    ]
  },
  {
    path: 'order',
    loadComponent: () => import('./order/order.component').then(m => m.OrderComponent)
  },
  {
    path: 'order-summary',
    loadComponent: () => import('./order-summary/order-summary.component').then(m => m.OrderSummaryComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./about/about.component').then(m => m.AboutComponent)
  },
  { path: '**', redirectTo: '' }
];
