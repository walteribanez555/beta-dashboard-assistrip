import { Injectable } from '@angular/core';
import { FormItem } from '../models/FormItem.model';
import { mapFieldToDynamicField } from '../mapper/field.mapper';
import { fieldValidationType } from '../enums/field-validation.enum';
import { formField, formFieldAssistrip } from '../enums/form-field.enum';
import { Title } from '@angular/platform-browser';
import { Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormBuilderService {
  listForms: FormItem[] = [
    {
      fields: [
        {
          typeField: formField.inputSelectCountry,

          data: {
            title: 'Selecciona el pais destino',
          },
          validations: [
            {
              typeValidation: fieldValidationType.Required,
            },
          ],
        },

        {
          typeField: formField.inputCalendar,

          data: {
            title: 'Fechas de salida y retorno',
          },
          validations: [
            {
              typeValidation: fieldValidationType.Required,
            },
          ],
        },



      ],
    },
    {
      fields: [
        {
          typeField: formField.inputSegmentAge,

          data: {
            title: 'Edades de los pasajeros',
          },
          validations: [
            {
              typeValidation: fieldValidationType.Required,
            },
          ],
        },

      ],
    },

    {
      fields: [
        {
          typeField: formField.inputProduct,
          data: {
            title: 'Selecciona tu plan',
          },
          options: {
            multipleSelect: false,
          },
          validations: [
            {
              typeValidation: fieldValidationType.Required,
            },
          ],
        },
      ],
    },
    {
      fields: [
        {
          typeField: formField.inputSelectExtra,
          data: {
            title: 'Selecciona los extras',
          },
          options: {
            multipleSelect: true,
          },
          validations: [
            {
              typeValidation: fieldValidationType.NotRequired,
            },
          ],
        },
      ],
    },
    {
      fields: [
        {
          typeField: formFieldAssistrip.showDetails,
          data : {
            title: "Detalles"
          }
        },
      ],
    },
    {
      fields: [
        {
          typeField: formFieldAssistrip.loadVouchers,
          data : {
            title: "Rellena los Vouchers"
          }
        },
      ],
    },
  ];

  constructor() {}

  getFormFieldsByStep(step: number) {
    const item: FormItem = this.listForms[step];

    const listItems = item.fields.map((field) => mapFieldToDynamicField(field));

    return listItems;
  }
}
