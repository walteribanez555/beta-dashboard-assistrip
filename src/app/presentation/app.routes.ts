import { Routes } from '@angular/router';
import { NotFoundComponent } from './modules/shared/pages/not-found/not-found.component';

export const routes: Routes = [
  {
    path : '',
    redirectTo : 'dashboard',
    pathMatch :'full',
  },
  {
    path : '',
    children : [
      {
        path : 'dashboard',
        loadChildren : () =>
            import('./modules/dashboard/dashboard.routes').then( m => m.routes)
      },
      {
        path : 'auth',
        loadChildren : () =>
            import('./modules/auth/auth.routes').then( m => m.routes)
      },
      {
        path :'404',
        component: NotFoundComponent
      },
      {
        path : '**',
        redirectTo : '404',
      }
    ]
  }


];
