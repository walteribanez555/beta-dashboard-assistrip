import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardExtraComponent } from '../../card-extra/card-extra.component';

@Component({
  selector: 'app-extra-select',
  standalone: true,
  imports: [
    CommonModule,
    CardExtraComponent,
  ],
  templateUrl : './extra-select.component.html',
  styleUrl: './extra-select.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExtraSelectComponent { }
