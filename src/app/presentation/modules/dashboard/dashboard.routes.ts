import { Routes } from "@angular/router";
import { LayoutPageComponent } from "./pages/layout-page/layout-page.component";


export const routes: Routes = [
  {
    path : '',
    component : LayoutPageComponent,
    children : [
      {
        path : 'rols',
        loadChildren : ( )=>
            import('../rols/rol.routes').then(m => m.routes)
      },
      {
        path : 'users',
        loadChildren : () =>
            import('../user/user.routes').then(m => m.routes)
      },
      {
        path : 'sinisters',
        loadChildren : () =>
            import('../sinister/sinister.routes').then(m => m.routes)
      },
      {
        path : 'coupons',
        loadChildren : () =>
            import('../coupon/coupons.routes').then(m => m.routes)
      },
      {
        path  : 'modifications',
        loadChildren : () =>
            import('../modification/modification.routes').then(m => m.routes)
      },
      {
        path :'reports',
        loadChildren : () =>
            import('../report/report.routes').then(m => m.routes)
      },
      {
        path : 'vouchers',
        loadChildren : () =>
            import('../voucher/voucher.routes').then(m => m.routes)
      }



    ]
  }


]
