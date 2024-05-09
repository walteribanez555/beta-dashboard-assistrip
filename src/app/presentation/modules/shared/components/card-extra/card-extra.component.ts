import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'card-extra',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl : './card-extra.component.html',
  styleUrl: './card-extra.component.css',
})
export class CardExtraComponent { }
