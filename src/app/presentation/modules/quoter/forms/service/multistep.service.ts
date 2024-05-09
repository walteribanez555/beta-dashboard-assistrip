import { Injectable } from '@angular/core';
import { DynamicForm } from '../types/dynamic.types';
import { FormTemplateComponent } from '../form-template/form-template.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MultistepService {

  getFormSteps() {
    const components = [
      new DynamicForm( FormTemplateComponent , { title : 'Destino y fechas'} ),
      new DynamicForm( FormTemplateComponent , { title : 'Pasajeros'}, ),
      new DynamicForm( FormTemplateComponent , { title : 'Selecciona el plan'}, ),
      new DynamicForm( FormTemplateComponent , { title : 'Extras'},),
      new DynamicForm( FormTemplateComponent , { title : 'Cotizacion'}, ),
      new DynamicForm( FormTemplateComponent , { title : 'Rellena los Vouchers'}, ),
    ];

    return components;
  }
}
