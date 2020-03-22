import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorreccionesPageRoutingModule } from './correcciones-routing.module';

import { CorreccionesPage } from './correcciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CorreccionesPageRoutingModule
  ],
  declarations: [CorreccionesPage]
})
export class CorreccionesPageModule {}
