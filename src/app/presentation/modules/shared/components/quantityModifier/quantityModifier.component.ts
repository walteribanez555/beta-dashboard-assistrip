import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'quantity-modifier',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl : './quantityModifier.component.html',
  styleUrl: './quantityModifier.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuantityModifierComponent { }
