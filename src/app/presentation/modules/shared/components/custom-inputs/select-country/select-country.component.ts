import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  Input,
  OnInit,
  inject,
} from '@angular/core';
import { CustomInput } from '../CustomInput.interface';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListviewComponent } from '../../listview/listview.component';
import { ItemListComponent } from '../../item-list/item-list.component';
import {
  CountryRegionLng,
  Translations,
} from '../../../services/location/models/CountryRegionLng';
import {
  filtrarPaises,
  obtenerNombreTraducido,
} from '../../../services/location/filters/filter-countries';
import { Subject } from 'rxjs';

@Component({
  selector: 'select-country',
  standalone: true,
  imports: [CommonModule, ListviewComponent, FormsModule],
  templateUrl: './select-country.component.html',
  styleUrl: './select-country.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectCountryComponent implements CustomInput, OnInit {
  ngOnInit(): void {
    if (this.formControl.value && this.formControl.value.length > 0) {
      this.searchInput = this.formControl.value;
    }
  }

  searchTerm(event: any) {
    if (event.target.value) this.searchTerm$.next(event.target.value);
  }

  searchTerm$ = new Subject<string>();

  @Input() placeholder?: string | null | undefined;
  @Input() data?: any;
  @Input() formControl!: FormControl<any>;

  isToggle: boolean = false;
  searchInput: string = 'Select Country';

  searchText = '';

  onSelectItem = (item: ItemListComponent) => {
    this.formControl.setValue(item.name);
    this.searchInput = item.name;
    this.isToggle = false;
  };


  updateToggle() {
    this.isToggle = !this.isToggle;
  }

  getCountryByIso2(codeIso2: string) {
    const lang: keyof Translations | null = localStorage.getItem('lang') as
      | keyof Translations
      | null;


    const country = this.data.countries.filter(
      (country: CountryRegionLng) => country.iso2 == codeIso2
    )[0];

    return obtenerNombreTraducido(country, lang!);
  }
}
