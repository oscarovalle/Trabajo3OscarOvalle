import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    loadComponent: () => import('./pages/inicio/inicio.page').then( m => m.InicioPage)
  },
  {
    path: 'faena',
    loadComponent: () => import('./pages/faena/faena.page').then( m => m.FaenaPage)
  },
  {
    path: 'listaequipo',
    loadComponent: () => import('./pages/listaequipo/listaequipo.page').then( m => m.ListaequipoPage)
  },
  {
    path: 'detalleequipo',
    loadComponent: () => import('./pages/detalleequipo/detalleequipo.page').then( m => m.DetalleequipoPage)
  },
  {
    path: 'ingresoreporte',
    loadComponent: () => import('./pages/ingresoreporte/ingresoreporte.page').then( m => m.IngresoreportePage)
  },
  {
    path: 'reporte',
    loadComponent: () => import('./pages/reporte/reporte.page').then( m => m.ReportePage)
  },
  {
    path: 'admin',
    loadComponent: () => import('./pages/admin/admin.page').then( m => m.AdminPage)
  },
];
