import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { MultistepComponent } from '../../components/multistep/multistep.component';
import { DynamicForm } from '../../forms/types/dynamic.types';
import { MultistepService } from '../../forms/service/multistep.service';
import { FormBuilderService } from '../../forms/service/form-builder.service';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MultistepComponent,
  ],
  templateUrl : './layout-page.component.html',
  styleUrl: './layout-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutPageComponent implements OnInit {
  ngOnInit(): void {


    const params = this.activatedRouteService.snapshot.queryParams;
    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        this.queryParamsTitles.push(params[key]);
      }
    }

    console.log(this.queryParamsTitles);

    this.formComponents = this.dynamicService.getFormSteps();

  }

  dynamicService = inject(MultistepService);
  activatedRouteService = inject(ActivatedRoute);
  formBuilderServce= inject(FormBuilderService);


  queryParamsTitles: string[] = [];
  formComponents: DynamicForm[] = [];



 }
