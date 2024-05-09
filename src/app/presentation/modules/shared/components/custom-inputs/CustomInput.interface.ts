import { FormControl, Validator } from "@angular/forms";

export interface CustomInput{
  // listener : (data : any) => void;
  placeholder? : string | null ;
  formControl? : FormControl,
  data ? : any,

}
