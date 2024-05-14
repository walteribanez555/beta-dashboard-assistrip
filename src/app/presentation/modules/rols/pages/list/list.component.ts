import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CustomTableComponent } from '../../../shared/components/custom-table/custom-table.component';
import { ModalComponent } from '../../../shared/components/modal/modal.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    CustomTableComponent,
    ModalComponent,
  ],
  templateUrl :'./list.component.html',
  styleUrl: './list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent { }
