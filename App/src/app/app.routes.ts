import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { authGuard } from './guards/auth.guard';

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
    canActivate: [authGuard],
    loadComponent: () => import('./pages/faena/faena.page').then( m => m.FaenaPage)
  },
  {
  path: 'listaequipo/:idFaena',
  canActivate: [authGuard],
  loadComponent: () => import('./pages/listaequipo/listaequipo.page').then(m => m.ListaequipoPage)
  },
  {
    path: 'detalleequipo/:idEquipo',
    canActivate: [authGuard],
  loadComponent: () => import('./pages/detalleequipo/detalleequipo.page').then(m => m.DetalleequipoPage)
  },
  {
    path: 'ingresoreporte/:idEquipo',
    canActivate: [authGuard],
  loadComponent: () => import('./pages/ingresoreporte/ingresoreporte.page').then(m => m.IngresoreportePage)
  },
  {
     path: 'reporte/:idReporte/:idEquipo',
     canActivate: [authGuard],
    loadComponent: () => import('./pages/reporte/reporte.page').then(m => m.ReportePage)
  },
  {
    path: 'admin',
    canActivate: [authGuard],
    loadComponent: () => import('./pages/admin/admin.page').then( m => m.AdminPage)
  },
];
