import { FormControl, FormGroup } from "@angular/forms";
import { DynamicField } from "../types/dynamic.types";

export interface FormListener {
  onNext: (form: DynamicField[], step : number) => void;
  onPrev: (step: number) => void
}
