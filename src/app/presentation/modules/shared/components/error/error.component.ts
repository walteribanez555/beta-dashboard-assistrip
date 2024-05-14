import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ErrorLogComponent } from '../error-log/error-log.component';

@Component({
  selector: 'error',
  standalone: true,
  imports: [
    CommonModule,
    ErrorLogComponent,
  ],
  templateUrl :'./error.component.html',
  styleUrl: './error.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorComponent {



  onToggleExpand : boolean = false;

  onToggleButton() {
    const ontoggleAux = this.onToggleExpand;
    this.onToggleExpand = !ontoggleAux;
  }



 }
