import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>popup works!</p>`,
  styleUrl: './popup.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopupComponent { }
