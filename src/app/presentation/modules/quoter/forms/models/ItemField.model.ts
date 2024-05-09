import { fieldValidationType } from "../enums/field-validation.enum";
import { formField, formFieldAssistrip } from "../enums/form-field.enum";

export interface OptionsField {
  multipleSelect?: boolean;
}

export interface FieldValidation {
  typeValidation: fieldValidationType;
  validationConfig?: string;
}

export interface ItemField {
  typeField: formField | formFieldAssistrip;
  data?: any;
  options?: OptionsField;
  validations?: FieldValidation[];
}
