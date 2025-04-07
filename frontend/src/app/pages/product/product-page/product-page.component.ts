import { Component } from '@angular/core';
import { SwissNumberFormatPipe } from '../../../pipes/swiss-number-format/swiss-number-format.pipe';
import { UserProfileCardComponent } from '../../../components/user/user-profile-card/user-profile-card.component';

@Component({
  selector: 'app-product-page',
  imports: [SwissNumberFormatPipe, UserProfileCardComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css',
})
export class ProductPageComponent {}
