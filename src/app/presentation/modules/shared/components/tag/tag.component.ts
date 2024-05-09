import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-tag',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>tag works!</p>`,
  styleUrl: './tag.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagComponent { }
