import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CustomTable } from './models/CustomTable.model';
import { ColumnTitle } from './models/ColumnTitle.model';
import { CustomItem } from './models/CustomItem.model';
import { ColumnTitleComponent } from '../column-title/column-title.component';
import { CustomItemComponent } from '../custom-item/custom-item.component';

@Component({
  selector: 'custom-table',
  standalone: true,
  imports: [
    CommonModule,
    ColumnTitleComponent,
    CustomItemComponent,
  ],
  templateUrl : './custom-table.component.html',
  styleUrl: './custom-table.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomTableComponent implements OnInit, CustomTable  {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  @Input()  columnTitles!: ColumnTitle[];
  @Input()  customItems!: CustomItem[];
  @Input()  onSelectItem!: (item: CustomItem) => void;
}
