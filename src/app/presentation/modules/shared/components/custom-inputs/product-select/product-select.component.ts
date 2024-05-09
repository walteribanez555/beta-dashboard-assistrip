import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CustomInput } from '../CustomInput.interface';
import { FormControl } from '@angular/forms';
import { CardProductComponent } from '../../card-product/card-product.component';

@Component({
  selector: 'product-select',
  standalone: true,
  imports: [
    CommonModule,
    CardProductComponent,
  ],
  templateUrl : './product-select.component.html',
  styleUrl: './product-select.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductSelectComponent implements CustomInput, OnInit {
  ngOnInit(): void {

  }
  @Input() placeholder?: string | null | undefined;
  @Input() data?: any;
  @Input() formControl!: FormControl<any>;



 }
