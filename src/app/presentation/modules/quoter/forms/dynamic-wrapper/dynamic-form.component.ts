import { FormListener } from "../interfaces/FormListener";
import { DynamicField } from "../types/dynamic.types";

export interface DynamicFormComponent{
  data : any;

  //Considerar si mantener formGroup
  fields : DynamicField[];
  step : number;
  formListener : FormListener;
  renderForm : () => void;

}
