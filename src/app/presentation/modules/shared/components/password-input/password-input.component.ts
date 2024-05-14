import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, inject } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'password-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './password-input.component.html',
  styleUrl: './password-input.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PasswordInputComponent {


 private cdr = inject(ChangeDetectorRef);


  isHidden: boolean = false;
  @Input() formControl!: FormControl;

  onChangeVisibility() {
    const isHidden = this.isHidden;

    this.isHidden = !isHidden;
  }


}
