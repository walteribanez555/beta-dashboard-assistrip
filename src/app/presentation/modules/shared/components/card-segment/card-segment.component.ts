import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { QuantityModifierComponent } from '../quantityModifier/quantityModifier.component';

@Component({
  selector: 'card-segment',
  standalone: true,
  imports: [
    CommonModule,
    QuantityModifierComponent,
  ],
  templateUrl : './card-segment.component.html',
  styleUrl: './card-segment.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardSegmentComponent { }
