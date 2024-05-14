import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TagComponent } from '../tag/tag.component';

@Component({
  selector: 'list-tags',
  standalone: true,
  imports: [
    CommonModule,
    TagComponent
  ],
  templateUrl : './list-tags.component.html',
  styleUrl: './list-tags.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListTagsComponent { }
