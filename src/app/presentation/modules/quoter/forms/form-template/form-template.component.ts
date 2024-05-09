import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  inject,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicFormComponent } from '../dynamic-wrapper/dynamic-form.component';
import { FormListener } from '../interfaces/FormListener';
import { DynamicField } from '../types/dynamic.types';
import { FieldTemplateComponent } from '../field-template/field-template.component';
import { FieldListener } from '../interfaces/FieldListener';

@Component({
  standalone: true,
  imports: [CommonModule, FieldTemplateComponent],
  templateUrl: './form-template.component.html',
  styleUrl: './form-template.component.css',
})
export class FormTemplateComponent implements DynamicFormComponent, OnInit {
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  @Input() fields: DynamicField[] = [];
  @Input() data: any;
  @Input() step!: number;
  @Input() formListener!: FormListener;

  // fieldListener : FieldListener | null = null;

  private cdr = inject(ChangeDetectorRef);

  renderForm() {
    // this.fieldListener = {
    //   // onLoad: () => {

    //   // }
    // }
    this.cdr.detectChanges();
  }

  onPrev() {
    this.formListener.onPrev(this.step);
  }

  onNext() {
    this.formListener.onNext(this.fields, this.step);
  }
}
