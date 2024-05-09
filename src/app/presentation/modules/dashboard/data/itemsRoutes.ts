import { ItemRoute } from '../models/ItemRoute.model';

export const itemRoutes: ItemRoute[] = [
  {
    icon: 'fa-solid fa-user',
    title: 'Usuarios',
    route: 'users/list',
    childrens: [

    ],
    onDisplay: false,
  },
  {
    icon: 'fa-solid fa-shield',
    title: 'Roles',
    route: null,
    childrens: [
      {
        icon : 'fa-solid fa-plus',
        title : 'Crear',
        route : 'rols/create',
        onDisplay : false,
        childrens : []
      },
      {
        icon: 'fa-solid fa-list',
        title: 'Lista',
        route: 'rols/list',
        onDisplay : false,
        childrens : []
      }
    ],
    onDisplay: false,
  },
  {
    icon: 'fa-solid fa-tag',
    title: 'Cupones',
    route: null,
    childrens: [
      {
        icon: 'fa-solid fa-plus',
        title: 'Agregar',
        route: 'coupons/create',
        onDisplay: false,
        childrens: [],
      },
      {
        icon: 'fa-solid fa-list',
        title: 'Lista',
        route: 'coupons/list',
        onDisplay : false,
        childrens : []
      }
    ],
    onDisplay: false,
  },
  {
    icon: 'fa-solid fa-pen-to-square',
    title: 'Modificaciones',
    route: 'modifications/list',
    childrens: [],
    onDisplay: false,
  },

  {
    icon: 'fa-solid fa-file',
    title: 'Vouchers',
    route: null,
    childrens: [
      {
        icon: 'fa-solid fa-plus',
        title: 'Cotizar',
        route: 'vouchers/create',
        onDisplay: false,
        childrens: [],
      },
      {
        icon: 'fa-solid fa-list',
        title: 'Lista',
        route: 'vouchers/list',
        onDisplay : false,
        childrens : []
      }
    ],
    onDisplay: false,
  },
  {
    icon: 'fa-solid fa-circle-info',
    title: 'Siniestros',
    route: 'sinisters/list',
    childrens: [],
    onDisplay: false,
  },
  {
    icon: 'fa-solid fa-file-zipper',
    title: 'Reportes',
    route: 'reports/list',
    childrens: [],
    onDisplay: false,
  },

];
