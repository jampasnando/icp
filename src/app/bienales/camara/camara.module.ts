import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CamaraPage } from './camara.page';
import { CameraPreview } from '@ionic-native/camera-preview/ngx';
import { HttpClientModule } from '@angular/common/http';
import { MarcoPage } from './marco/marco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '',
        component: CamaraPage
      }
    ])
  ],
  declarations: [CamaraPage,MarcoPage],
  providers:[CameraPreview,MarcoPage],
  entryComponents:[MarcoPage]
})
export class CamaraPageModule {}
