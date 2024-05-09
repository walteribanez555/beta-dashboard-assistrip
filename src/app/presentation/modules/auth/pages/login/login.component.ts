import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PasswordInputComponent } from '../../../shared/components/password-input/password-input.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    PasswordInputComponent,
  ],
  templateUrl : './login.component.html',
  styleUrl: './login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent { }
