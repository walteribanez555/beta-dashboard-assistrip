import { Pipe, type PipeTransform } from '@angular/core';
import { PdfVoucher } from '../data/voucher-pdf';

@Pipe({
  name: 'TranslatePipe',
})
export class TranslatePipe implements PipeTransform {
  transform(value: string): string {
    const lang = localStorage.getItem('lang');

    if (lang == 'es') {
      return value;
    }

    const languageItem = PdfVoucher.find((item) => item.word === value);
    if (languageItem) {
      const translation = languageItem.translations[lang!];
      return translation;
    }

    return value;
  }
}
