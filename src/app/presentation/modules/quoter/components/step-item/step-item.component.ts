import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { DynamicForm } from '../../forms/types/dynamic.types';

@Component({
  selector: 'step-item',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl : './step-item.component.html',
  styleUrl: './step-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepItemComponent {

  @Input() step! : DynamicForm;
  @Output() onSelectItem = new EventEmitter<number>();
  @Input() pos! : number;


  loadComponent(){
    // this.step.isActual = true

    this.onSelectItem.emit(this.pos);

  }




 }
