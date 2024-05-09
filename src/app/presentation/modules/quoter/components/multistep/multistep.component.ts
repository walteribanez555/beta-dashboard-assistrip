import { CommonModule } from '@angular/common';
import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component,   Input, OnInit, ViewChild, inject } from '@angular/core';
import { DetailsComponent } from '../details/details.component';
import { DynamicForm } from '../../forms/types/dynamic.types';
import { DcDirective } from '../../forms/dynamic-wrapper/dc.directive';
import { FormListener } from '../../forms/interfaces/FormListener';
import { DynamicFormComponent } from '../../forms/dynamic-wrapper/dynamic-form.component';
import { FormBuilderService } from '../../forms/service/form-builder.service';


@Component({
  selector: 'multistep',
  standalone: true,
  imports: [
    CommonModule,
    DetailsComponent,
    DcDirective,
  ],
  templateUrl : './multistep.component.html',
  styleUrl: './multistep.component.css',
})
export class MultistepComponent implements OnInit, AfterViewInit   {


  private cdr = inject(ChangeDetectorRef);
  private formBuilderService = inject(FormBuilderService);



  ngAfterViewInit(): void {
    if(this.formComponents.length> 0) this.loadComponent(0);
    this.cdr.detectChanges();
  }


  ngOnInit(): void {

  }


  @Input() formComponents! : DynamicForm[];

  @ViewChild(DcDirective) dcWrapper! : DcDirective;

  loadComponent(itemPos : number){

    const item = this.formComponents[itemPos];


    const viewContainerRef = this.dcWrapper.viewContainerRef;
    viewContainerRef.clear();


    const componentRef = viewContainerRef.createComponent<DynamicFormComponent>(
      item.component
    )

    componentRef.instance.data = item.data;
    componentRef.instance.formListener = this.createFormListener();
    componentRef.instance.step = itemPos;
    componentRef.instance.fields  = this.formBuilderService.getFormFieldsByStep(itemPos);



    //Render again with the form
    componentRef.instance.renderForm();
    // componentRef.instance.formGroup = item.formGroup;


  }

  createFormListener() {
    const formListener : FormListener = {
      onNext : ( form : any, step : number) => {

        console.log({form});

        this.formComponents[step].data.resp = form;

        // console.log(form.value);

        if(this.formComponents.length > step +1)
        this.loadComponent(step+1);
      },
      onPrev : ( step : number ) => {


        if(step > 0)
        this.loadComponent(step-1);
      }
    }

    return formListener;

  }






 }
