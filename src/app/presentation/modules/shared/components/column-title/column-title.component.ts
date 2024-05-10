import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'column-title',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl : './column-title.component.html',
  styleUrl: './column-title.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColumnTitleComponent { }
