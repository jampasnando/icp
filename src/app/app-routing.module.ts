import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/ingreso',
    pathMatch: 'full'
  },
  // {
  //   path: 'marco',
  //   loadChildren: () => import('./bienales/camara/marco/marco.module').then( m => m.MarcoPageModule)
  // },
  {
    path: 'camara/:codigo/:nombre/:ano/:mes',
    loadChildren: () => import('./bienales/camara/camara.module').then( m => m.CamaraPageModule)
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'bienales',
    loadChildren: () => import('./bienales/bienales.module').then( m => m.BienalesPageModule)
  },
  {
    path: 'lista/:proy/:ano/:mes',
    loadChildren: () => import('./bienales/lista/lista.module').then( m => m.ListaPageModule)
  },
  {
    path: 'inscripciones',
    loadChildren: () => import('./inscripciones/inscripciones.module').then( m => m.InscripcionesPageModule)
  },
  {
    path: 'correcciones',
    loadChildren: () => import('./correcciones/correcciones.module').then( m => m.CorreccionesPageModule)
  },
  {
    path: 'mapa',
    loadChildren: () => import('./mapa/mapa.module').then( m => m.MapaPageModule)
  },
  {
    path: 'materiales',
    loadChildren: () => import('./materiales/materiales.module').then( m => m.MaterialesPageModule)
  },
  {
    path: 'micuenta',
    loadChildren: () => import('./micuenta/micuenta.module').then( m => m.MicuentaPageModule)
  },
  {
    path: 'ingreso',
    loadChildren: () => import('./ingreso/ingreso.module').then( m => m.IngresoPageModule)
  },
  {
    path: 'cartas',
    loadChildren: () => import('./cartas/cartas.module').then( m => m.CartasPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
