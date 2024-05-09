import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilderService } from '../../../quoter/forms/service/form-builder.service';
import { MultistepService } from '../../../quoter/forms/service/multistep.service';
import { DynamicForm } from '../../../quoter/forms/types/dynamic.types';
import { MultistepComponent } from '../../../quoter/components/multistep/multistep.component';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
    CommonModule,
    MultistepComponent,
  ],
  templateUrl : './create.component.html',
  styleUrl: './create.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateComponent implements OnInit {

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
