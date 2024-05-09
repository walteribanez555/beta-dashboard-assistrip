import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomInput } from '../CustomInput.interface';
import { Observable } from 'rxjs';

@Component({
  standalone: true,
  selector: 'input-date',
  imports: [CommonModule],
  templateUrl: './input-date.component.html',
  styleUrl: './input-date.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputDateComponent implements CustomInput, OnInit {
  ngOnInit(): void {
    // console.log({onselect :this.selectedDate});

    // this.onSelectFinish?.subscribe({
    //   next: (date: Date) => {
    //     this.onFinish = new Date(date);
    //     this.updateCalendar();
    //   },
    // });

    // this.onSelectInit?.subscribe({
    //   next: (date: Date) => {
    //     this.onStart = new Date(date);
    //     this.updateCalendar();
    //   },
    // });

    this.updateCalendar();
  }

  data?: any;
  @Input() formControl?: FormControl<any>;
  @Input() placeholder: string | null = null;
  @Output() onSelectDate = new EventEmitter();

  @Input() onSelectInit?: Observable<Date>;
  @Input() onSelectFinish?: Observable<Date>;

  @Input() onStart: Date | null = null;
  @Input() onFinish: Date | null = null;
  private selectedDate: Date | null = null;

  monthYear: string = '';

  currentDate = new Date();

  days: string[] = [];

  updateCalendar() {
    this.days = [];

    const currentYear = this.currentDate.getFullYear();
    const currentMonth = this.currentDate.getMonth();

    const firstDay = new Date(currentYear, currentMonth, 0);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);

    const totalDays = lastDay.getDate();

    const firstDayIndex = firstDay.getDay();
    const lastDayIndex = lastDay.getDay();

    const monthYearString = this.currentDate.toLocaleDateString('default', {
      month: 'long',
      year: 'numeric',
    });

    this.monthYear = monthYearString;

    for (let i = firstDayIndex; i > 0; i--) {
      const prevDate = new Date(currentYear, currentMonth, 0 - i + 1);
      this.days.push(prevDate.getDate().toString());
    }

    for (let i = 1; i <= totalDays; i++) {
      this.days.push(`${i}`);
    }

    for (let i = 1; i <= 7 - lastDayIndex; i++) {
      const nextDate = new Date(currentYear, currentMonth + 1, i);
      this.days.push(nextDate.getDate().toString());
    }
  }

  onClickChild(day: string, position: number) {
    const currentYear = this.currentDate.getFullYear();
    const currentMonth = this.currentDate.getMonth();
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const currentDateAux = new Date(this.currentDate); // Create a new Date object
    const lastDayPos = this.getLastDateActualMonth(this.days, lastDay);

    if (parseInt(day) > position + 1) {
      currentDateAux.setMonth(currentDateAux.getMonth() - 1);
    }

    if (parseInt(day) < lastDay.getDate() && position > lastDayPos.index) {
      currentDateAux.setMonth(currentDateAux.getMonth() + 1);
    }

    const date = currentDateAux.toISOString().split('T')[0].split('-');
    date[2] = day;

    const dateConverted = date.join('-');

    this.selectedDate = new Date(dateConverted);
    // console.log({finish : this.onFinish, start: this.onStart});

    this.onSelectDate.emit(new Date(dateConverted));
  }

  onPrev() {
    this.currentDate.setMonth(this.currentDate.getMonth() - 1);
    this.updateCalendar();
  }

  onNext() {
    this.currentDate.setMonth(this.currentDate.getMonth() + 1);
    this.updateCalendar();
  }

  getLastDateActualMonth(days: string[], lastDay: Date) {
    const posLastDate = this.days
      .map((day, index) => {
        return { day, index };
      })
      .filter((item) => parseInt(item.day) == lastDay.getDate())
      .slice(-1)[0];

    return posLastDate;
  }

  onDate(day: string, position: number) {
    const currentYear = this.currentDate.getFullYear();
    const currentMonth = this.currentDate.getMonth();
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const firstDay = new Date(currentYear, currentMonth, 0);
    const currentDateAux = new Date(this.currentDate);

    const lastDayPos = this.getLastDateActualMonth(this.days, lastDay);
    // const posLastDay  = this.days.map( (day, index) =>   )

    if (parseInt(day) > position + 1) {
      currentDateAux.setMonth(currentDateAux.getMonth() - 1);
    }

    if (parseInt(day) < lastDay.getDate() && position > lastDayPos.index) {
      currentDateAux.setMonth(currentDateAux.getMonth() + 1);
    }

    const date = currentDateAux.toISOString().split('T')[0].split('-');
    date[2] = day;

    const secondayCurrentDateAux = new Date(date.join('-'));

    if (secondayCurrentDateAux.toISOString() === this.onFinish?.toISOString()) {
      return 'limit end';
    }

    if (secondayCurrentDateAux.toISOString() === this.onStart?.toISOString()) {
      return "limit start";
    }

    if (this.onFinish && this.onStart) {
      if (
        this.onFinish > secondayCurrentDateAux &&
        this.onStart < secondayCurrentDateAux
      ) {

        return 'range';
      }
    }

    return '';
  }
}
