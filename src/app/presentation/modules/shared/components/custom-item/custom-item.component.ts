import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CustomRowComponent } from '../custom-row/custom-row.component';

@Component({
  selector: 'custom-item',
  standalone: true,
  imports: [
    CommonModule,
    CustomRowComponent,
  ],
  templateUrl : './custom-item.component.html',
  styleUrl: './custom-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomItemComponent { }
