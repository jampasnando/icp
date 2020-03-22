import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BienalesPageRoutingModule } from './bienales-routing.module';

import { BienalesPage } from './bienales.page';
import { BienalesService } from '../service/bienales.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    BienalesPageRoutingModule
  ],
  declarations: [BienalesPage],
  providers:[BienalesService]
})
export class BienalesPageModule {}
