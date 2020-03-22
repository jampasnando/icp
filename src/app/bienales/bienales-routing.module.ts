import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BienalesPage } from './bienales.page';

const routes: Routes = [
  {
    path: '',
    component: BienalesPage
  },
  {
    path: 'lista',
    loadChildren: () => import('./lista/lista.module').then( m => m.ListaPageModule)
  },
  {
    path: 'camara',
    loadChildren: () => import('./camara/camara.module').then( m => m.CamaraPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BienalesPageRoutingModule {}
