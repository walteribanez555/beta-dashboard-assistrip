import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CreateComponent } from '../../../user/components/create/create.component';
import { ExportComponent } from '../export/export.component';

@Component({
  selector: 'modal',
  standalone: true,
  imports: [
    CommonModule,
    ExportComponent,
    CreateComponent,
  ],
  templateUrl : './modal.component.html',
  styleUrl: './modal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent { }
