import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CamaraPage } from './camara.page';

const routes: Routes = [
  {
    path: '',
    component: CamaraPage
  },
  {
    path: 'marco',
    loadChildren: () => import('./marco/marco.module').then( m => m.MarcoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CamaraPageRoutingModule {}
