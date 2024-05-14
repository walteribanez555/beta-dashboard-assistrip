import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PasswordInputComponent } from '../../../shared/components/password-input/password-input.component';
import { SelectRolComponent } from '../../../shared/components/custom-inputs/select-rol/select-rol.component';

@Component({
  selector: 'create',
  standalone: true,
  imports: [
    CommonModule,
    PasswordInputComponent,
    SelectRolComponent,
  ],
  templateUrl : './create.component.html',
  styleUrl: './create.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateComponent { }
