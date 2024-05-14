import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ItemList } from '../item-list/interfaces/ItemList.interfaces';
import { InputValueComponent } from '../custom-inputs/input-value/input-value.component';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'export',
  standalone: true,
  imports: [
    CommonModule,
    InputValueComponent
  ],
  templateUrl : './export.component.html',
  styleUrl: './export.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExportComponent {


  itemFormControl = new FormControl();

  typeValue : ItemList[] = [
    {
      id : 1,
      name : 'Columnas separadas por  ";"'
    },
    {
      id : 2,
      name : 'Columnas separadas por ","'
    }


  ]



 }
