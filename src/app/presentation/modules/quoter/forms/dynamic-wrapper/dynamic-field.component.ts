import { FormControl } from "@angular/forms";
import { DynamicField } from "../types/dynamic.types";
import { FieldListener } from "../interfaces/FieldListener";

export interface DynamicFieldComponent{
  dynamicField : DynamicField,
  fieldListener : FieldListener,

}
