import { Type } from "@angular/core";
import { FormControl } from "@angular/forms";



export class DynamicItem {
  constructor(public component: Type<any>, public data: any) {}
}

export class DynamicForm extends DynamicItem {
  constructor(component: Type<any>,  data: any) {
    super(component, data);
  }
}

export class DynamicField extends DynamicItem {
  constructor(component: Type<any>,  data: any, public fieldFormControl: FormControl,) {
    super(component, data);
  }
}


