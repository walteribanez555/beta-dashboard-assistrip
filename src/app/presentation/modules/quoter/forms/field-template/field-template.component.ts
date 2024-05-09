import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { DynamicField } from '../types/dynamic.types';
import { DynamicFieldComponent } from '../dynamic-wrapper/dynamic-field.component';
import { DcDirective } from '../dynamic-wrapper/dc.directive';
import { CustomInput } from '../../../shared/components/custom-inputs/CustomInput.interface';
import { FieldListener } from '../interfaces/FieldListener';

@Component({
  selector: 'field-template',
  standalone: true,
  imports: [CommonModule, DcDirective],
  templateUrl: './field-template.component.html',
  styleUrl: './field-template.component.css',
})
export class FieldTemplateComponent
  implements DynamicFieldComponent, AfterViewInit
{
  ngAfterViewInit(): void {
    this.cdr.detectChanges();
    this.loadComponent();
  }

  titleField : string | null = null;

  @Input() fieldListener!: FieldListener;

  @Input() dynamicField!: DynamicField;

  @ViewChild(DcDirective) dcWrapper!: DcDirective;

  private cdr = inject(ChangeDetectorRef);

  loadComponent() {
    const viewContainerRef = this.dcWrapper.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<CustomInput>(
      this.dynamicField.component
    );





    componentRef.instance.formControl = this.dynamicField.fieldFormControl;
    componentRef.instance.data = this.dynamicField.data;


    this.titleField = this.dynamicField.data['title'];


    // Manually trigger change detection
    this.cdr.detectChanges();
  }
}
