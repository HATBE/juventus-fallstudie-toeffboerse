import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SwissNumberFormatPipe } from '../../../pipes/swiss-number-format/swiss-number-format.pipe';
import { Bike } from '../../../models/bike.model';

@Component({
    selector: 'app-product-list-item',
    imports: [RouterModule, CommonModule, SwissNumberFormatPipe],
    templateUrl: './product-list-item.component.html',
    styleUrl: './product-list-item.component.css'
})
export class ProductListItemComponent {
  @Input() product!: Bike;

  protected onHeartClicked(): void {
    alert('You clicked the heart!');
  }
}
