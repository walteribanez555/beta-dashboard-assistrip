import { FormControl } from '@angular/forms';
import { InputDateComponent } from '../../../shared/components/custom-inputs/input-date/input-date.component';
import { ItemField } from '../models/ItemField.model';
import { DynamicField } from '../types/dynamic.types';
import { formField, formFieldAssistrip } from '../enums/form-field.enum';
import { InputTextComponent } from '../../../shared/components/custom-inputs/input-text/input-text.component';
import { SelectCountryComponent } from '../../../shared/components/custom-inputs/select-country/select-country.component';
import { countrys } from '../../../shared/services/location/data/country-region';
import { InputRangeComponent } from '../../../shared/components/custom-inputs/input-range/input-range.component';
import { SegmentAgeComponent } from '../../../shared/components/custom-inputs/segment-age/segment-age.component';
import { ProductSelectComponent } from '../../../shared/components/custom-inputs/product-select/product-select.component';
import { ExtraSelectComponent } from '../../../shared/components/custom-inputs/extra-select/extra-select.component';
import { QuoteComponent } from '../../../shared/components/custom-inputs/quote/quote.component';
import { VouchersListComponent } from '../../../shared/components/custom-inputs/vouchers-list/vouchers-list.component';

export function mapFieldToDynamicField(field: ItemField, data?: any) {
  let dynamicFieldComponent: DynamicField;

  if (field.typeField === formField.inputCalendar) {
    dynamicFieldComponent = getInputRangeCalendar(field.data);
  }

  if (field.typeField === formField.inputProduct) {
    dynamicFieldComponent = getInputProduct(field.data);
  }

  if (field.typeField === formField.inputSelectExtra) {
    dynamicFieldComponent = getInputSelectExtras(field.data);
  }

  if (field.typeField === formField.inputSegmentAge) {
    dynamicFieldComponent = getInputSegmentAge(field.data);
  }

  if (field.typeField === formField.inputSelectCountry) {
    dynamicFieldComponent = getInputSelectCountry(field.data);
  }

  if (field.typeField === formField.inputText) {
    dynamicFieldComponent = getInputText(field.data);
  }

  if (field.typeField === formFieldAssistrip.loadVouchers) {
    dynamicFieldComponent = getLoadVouchers(field.data);
  }

  if (field.typeField === formFieldAssistrip.showDetails) {
    dynamicFieldComponent = getShowDetails(field.data);
  }

  return dynamicFieldComponent!;
}

function getInputText(data: any) {
  return new DynamicField(InputTextComponent, data, new FormControl());
}

function getInputRangeCalendar(data: any) {
  return new DynamicField(InputRangeComponent, data, new FormControl());
}

function getInputCalendar(data: any) {
  return new DynamicField(InputDateComponent, data, new FormControl());
}

function getInputProduct(data: any) {
  return new DynamicField(ProductSelectComponent, data, new FormControl());
}

function getInputSegmentAge(data: any) {
  return new DynamicField(SegmentAgeComponent, data, new FormControl());
}

function getInputSelectCountry(data: any) {
  data.countries = countrys;
  return new DynamicField(SelectCountryComponent, data, new FormControl());
}

function getLoadVouchers(data: any) {
  return new DynamicField(VouchersListComponent, data, new FormControl());
}

function getShowDetails(data: any) {
  return new DynamicField(QuoteComponent, data, new FormControl());
}

function getInputSelectExtras(data: any) {
  return new DynamicField(ExtraSelectComponent, data, new FormControl());
}
