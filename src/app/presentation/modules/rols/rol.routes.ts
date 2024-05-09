import { Routes } from "@angular/router";
import { LayoutPageComponent } from "./pages/layout-page/layout-page.component";
import { CreateComponent } from "./pages/create/create.component";
import { ListComponent } from "./pages/list/list.component";

export const routes: Routes = [
  {
    path : '',
    component : LayoutPageComponent,
    children : [
      {
        path : 'create',
        component : CreateComponent,
      },
      {
        path : 'list',
        component : ListComponent,
      }

    ]
  }
]
