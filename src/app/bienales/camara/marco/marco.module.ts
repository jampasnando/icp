import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarcoPageRoutingModule } from './marco-routing.module';

import { MarcoPage } from './marco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarcoPageRoutingModule,
  ],
  declarations: [MarcoPage],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class MarcoPageModule {}
