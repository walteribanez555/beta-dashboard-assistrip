import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'error-log',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl : './error-log.component.html',
  styleUrl: './error-log.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorLogComponent { }
