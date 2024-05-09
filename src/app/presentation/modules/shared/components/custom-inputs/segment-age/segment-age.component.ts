import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CustomInput } from '../CustomInput.interface';
import { FormControl } from '@angular/forms';
import { CardSegmentComponent } from '../../card-segment/card-segment.component';

@Component({
  standalone: true,
  imports: [CommonModule, CardSegmentComponent],
  templateUrl: './segment-age.component.html',
  styleUrl: './segment-age.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SegmentAgeComponent implements CustomInput, OnInit {
  ngOnInit(): void {

  }
  @Input() placeholder?: string | null | undefined;
  @Input() data?: any;
  @Input() formControl!: FormControl<any>;
}
