import { CommonModule, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { CustomInput } from '../CustomInput.interface';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import QrCode from 'qrcode';


@Component({
  selector: 'quote',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  providers: [ Location, { provide: LocationStrategy, useClass: PathLocationStrategy }, ],
  templateUrl : './quote.component.html',
  styleUrl: './quote.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuoteComponent implements CustomInput, OnInit {
  ngOnInit(): void {


    const urlQuote = location.href;
    const element =  document.getElementById('qrQuote');


    if(element) {
      QrCode.toCanvas(element, urlQuote, (err) => {
        if(err) {
          console.log(err);
        }
      })
    }



  }


  // private activatedRoute= inject(ActivatedRoute);

  placeholder?: string | null | undefined;
  formControl?: FormControl<any> | undefined;
  data?: any;
}
