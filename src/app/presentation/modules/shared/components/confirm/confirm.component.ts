import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'confirm',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl : './confirm.component.html',
  styleUrl: './confirm.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmComponent { }
