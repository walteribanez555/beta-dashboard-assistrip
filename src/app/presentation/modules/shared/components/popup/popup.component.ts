import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfirmComponent } from '../confirm/confirm.component';
import { LoadingComponent } from '../loading/loading.component';
import { SuccessComponent } from '../success/success.component';
import { ErrorComponent } from '../error/error.component';

@Component({
  selector: 'popup',
  standalone: true,
  imports: [
    CommonModule,
    ConfirmComponent,
    LoadingComponent,
    SuccessComponent,
    ErrorComponent,
  ],
  templateUrl : './popup.component.html',
  styleUrl: './popup.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopupComponent { }
