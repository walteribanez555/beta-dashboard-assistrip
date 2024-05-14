import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InputCodeComponent } from '../../../shared/components/input-code/input-code.component';
import { ItemListComponent } from '../../../shared/components/item-list/item-list.component';
import { InputValueComponent } from '../../../shared/components/custom-inputs/input-value/input-value.component';
import { FormControl } from '@angular/forms';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    InputCodeComponent,
    InputValueComponent,
  ],
  templateUrl : './create.component.html',
  styleUrl: './create.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateComponent {


  itemFormControl = new FormControl()

   typeValues : ItemListComponent[] = [
    {
      id : 1,
      name : 'Porcentaje',
    },
    {
      id : 2,
      name : 'Valor',
    }
   ]


 }
