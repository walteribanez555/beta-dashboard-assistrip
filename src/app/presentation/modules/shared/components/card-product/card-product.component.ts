import { CommonModule, CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'card-product',
  standalone: true,
  imports: [
    CommonModule,
    CurrencyPipe,
  ],
  templateUrl : './card-product.component.html',
  styleUrl: './card-product.component.css',
})
export class CardProductComponent { }
