import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'input-code',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl : './input-code.component.html',
  styleUrl: './input-code.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputCodeComponent { }
