import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { StepItemComponent } from '../step-item/step-item.component';
import { DynamicForm } from '../../forms/types/dynamic.types';

@Component({
  selector: 'details-multistep',
  standalone: true,
  imports: [
    CommonModule,
    StepItemComponent,
  ],
  templateUrl : './details.component.html',
  styleUrl: './details.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailsComponent {

  @Input() componentsForm! : DynamicForm[];
  @Output() selectedItemEvent = new EventEmitter<number>();


  onSelectItem( pos :number) {
    this.selectedItemEvent.emit(pos - 1);
  }

}
