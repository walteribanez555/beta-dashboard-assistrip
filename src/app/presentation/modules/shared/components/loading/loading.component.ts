import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'loader',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="loading-component">
    <div class="loader"></div>
    <span>Un momento por favor, cargando...</span>
  </div>`,
  styleUrl: './loading.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingComponent {}
