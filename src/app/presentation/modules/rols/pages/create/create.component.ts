import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InputCodeComponent } from '../../../shared/components/input-code/input-code.component';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
    CommonModule,
    InputCodeComponent,
  ],
  templateUrl : './create.component.html',
  styleUrl: './create.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateComponent {




}
