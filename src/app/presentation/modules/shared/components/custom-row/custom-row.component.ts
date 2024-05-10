import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'custom-row',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl : './custom-row.component.html',
  styleUrl: './custom-row.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomRowComponent { }
