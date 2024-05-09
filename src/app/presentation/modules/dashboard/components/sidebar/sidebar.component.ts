import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ItemRouteComponent } from '../item-route/item-route.component';
import { ItemRoute } from '../../models/ItemRoute.model';
import { itemRoutes } from '../../data/itemsRoutes';

@Component({
  selector: 'sidebar',
  standalone: true,
  imports: [
    CommonModule,
    ItemRouteComponent,
  ],
  templateUrl : './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  @Output() onToggleMenu = new EventEmitter();


  onToggle(){
    this.onToggleMenu.emit();
  }




  routes  = itemRoutes;

 }
