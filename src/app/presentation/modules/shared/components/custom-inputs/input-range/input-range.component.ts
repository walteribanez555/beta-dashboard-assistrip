import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CustomInput } from '../CustomInput.interface';
import { FormControl } from '@angular/forms';
import { InputDateComponent } from '../input-date/input-date.component';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { diffBetDates } from '../../../utils/dates.utils';

@Component({
  standalone: true,
  imports: [CommonModule, InputDateComponent],
  templateUrl: './input-range.component.html',
  styleUrl: './input-range.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputRangeComponent implements CustomInput, OnInit {
  ngOnInit(): void {
    this.onStart = new Subject<Date>();
    this.onFinish = new Subject<Date>();

    this.onFinishObservable = this.onFinish.asObservable();
    this.onStartObservable = this.onStart.asObservable();
  }

  placeholder?: string | null | undefined;
  formControl?: FormControl<any> | undefined;
  data?: any;
  onStart?: Subject<Date>;
  onFinish?: Subject<Date>;
  onStartObservable?: Observable<Date>;
  onFinishObservable?: Observable<Date>;
  onStartDate?: Date;
  onFinishDate?: Date;
  daysDifference = 0;

  onStartSelected(date: Date) {
    this.onStartDate = new Date(date);



    if (this.onFinishDate && this.onStartDate) {
      this.daysDifference = diffBetDates(this.onStartDate, this.onFinishDate);
    }
  }

  onFinishSelected(date: Date) {
    this.onFinishDate = new Date(date);


    if (this.onFinishDate && this.onStartDate) {
      this.daysDifference = diffBetDates(this.onStartDate, this.onFinishDate);
    }
  }
}
