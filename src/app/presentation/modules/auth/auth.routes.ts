import { Routes } from "@angular/router";
import { LayoutPageComponent } from "./pages/layout-page/layout-page.component";
import { LoginComponent } from "./pages/login/login.component";


export const routes : Routes = [
  {
    path : '',
    component : LayoutPageComponent,
    children : [
      {
        path : 'login',
        component : LoginComponent,
      }
    ]
  }
]
