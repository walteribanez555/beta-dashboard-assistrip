import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ItemRoute } from '../../models/ItemRoute.model';

@Component({
  selector: 'item-route',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './item-route.component.html',
  styleUrl: './item-route.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemRouteComponent {
  @Input() itemRoute!: ItemRoute;
  @Output() onToggle = new EventEmitter();

  onDisplayItems() {
    if (this.itemRoute.childrens.length > 0) {
      const onDisplay = this.itemRoute.onDisplay;
      this.itemRoute.onDisplay = !onDisplay;
    }
  }

  toggleItemMenu(){
    this.onToggle.emit();
  }
}
