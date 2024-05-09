import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CustomInput } from '../CustomInput.interface';
import { FormControl } from '@angular/forms';
import { VoucherFormComponent } from '../../voucher-form/voucher-form.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'vouchers-list',
  standalone: true,
  imports: [
    CommonModule,
    VoucherFormComponent,
    RouterModule,
  ],
  templateUrl : './vouchers-list.component.html',
  styleUrl: './vouchers-list.component.css',
})
export class VouchersListComponent implements CustomInput, OnInit{
  ngOnInit(): void {
  }

  @Input() placeholder?: string | null | undefined;
  @Input() data?: any;
  @Input() formControl!: FormControl<any>;


  scrollToChild() {
    const element = document.getElementById('hola');
    if(element) {
      element.scrollIntoView(true);
    }

  }
}
