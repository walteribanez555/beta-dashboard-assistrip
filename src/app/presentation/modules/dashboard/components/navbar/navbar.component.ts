import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
  ],
  templateUrl : './navbar.component.html',
  styleUrl: './navbar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {

  isOpenMenu : boolean = false

  toggleMenu() {
    const isOpen = this.isOpenMenu
    this.isOpenMenu = !isOpen
  }

}



