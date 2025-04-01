import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ProductPageComponent } from './pages/product/product-page/product-page.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: LandingPageComponent, title: 'Home' },
      {
        path: 'products/:id',
        component: ProductPageComponent,
        title: 'Product',
      },
    ],
  },
];
