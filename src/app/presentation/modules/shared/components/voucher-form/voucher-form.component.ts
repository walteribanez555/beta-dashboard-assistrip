import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'voucher-form',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl : './voucher-form.component.html',
  styleUrl: './voucher-form.component.css',
})
export class VoucherFormComponent {

  @Input() positionElement! : number

 }
