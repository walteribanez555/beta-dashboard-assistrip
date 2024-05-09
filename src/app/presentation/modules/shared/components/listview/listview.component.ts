import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ListView } from './interfaces/ListView';
import { ItemList } from '../item-list/interfaces/ItemList.interfaces';
import { ItemListComponent } from '../item-list/item-list.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'listview',
  standalone: true,
  imports: [CommonModule, ItemListComponent],
  templateUrl: './listview.component.html',
  styleUrl: './listview.component.css',
})
export class ListviewComponent implements ListView, OnInit {
  ngOnInit(): void {
    this.filteredItems = this.items;

    this.filterListener?.subscribe({
      next: (term: string) => {
        this.filterItems(term);
      },
    });
  }

  @Input() isHidden: boolean = false;
  @Input() onSelectItem!: (item: ItemList) => void;
  @Input() items: ItemList[] = [];
  @Input() filterListener?: Observable<string>;
  filteredItems: ItemList[] = [];

  filterItems(term: string) {
    this.filteredItems = this.items.filter((item) =>
      item.name.toLowerCase().startsWith(term.toLowerCase())
    );
  }

  onSelect(item: ItemList) {
    this.onSelectItem(item);
  }
}
