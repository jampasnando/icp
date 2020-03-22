import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarcoPage } from './marco.page';

const routes: Routes = [
  {
    path: '',
    component: MarcoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarcoPageRoutingModule {}
