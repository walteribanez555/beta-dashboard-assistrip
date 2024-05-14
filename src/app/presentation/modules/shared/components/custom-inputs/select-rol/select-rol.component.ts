import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InputValueComponent } from '../input-value/input-value.component';
import { ListTagsComponent } from '../../list-tags/list-tags.component';

@Component({
  selector: 'select-rol',
  standalone: true,
  imports: [
    CommonModule,
    InputValueComponent,
    ListTagsComponent,
  ],
  templateUrl : './select-rol.component.html',
  styleUrl: './select-rol.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectRolComponent { }
