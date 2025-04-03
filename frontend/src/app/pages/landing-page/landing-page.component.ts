import { Component } from '@angular/core';
import { ProductListComponent } from '../../components/product/product-list/product-list.component';

@Component({
    selector: 'app-landing-page',
    imports: [ProductListComponent],
    templateUrl: './landing-page.component.html',
    styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {}
