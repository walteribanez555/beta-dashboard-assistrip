import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CustomTableComponent } from '../../../shared/components/custom-table/custom-table.component';
import { PopupComponent } from '../../../shared/components/popup/popup.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    CustomTableComponent,
    PopupComponent,
  ],
  templateUrl : './list.component.html',
  styleUrl: './list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent { }
