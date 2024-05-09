import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CustomInput } from '../CustomInput.interface';
import { FormControl, Validator } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl : './input-text.component.html',
  styleUrl: './input-text.component.css',
})
export class InputTextComponent implements CustomInput {
  @Input()  formControl!: FormControl<any>;
  @Input()  placeholder: string | null = null;
  @Input()  validators : Validator[] = [];

  @Input() listener!: (data: any) => void;



}
