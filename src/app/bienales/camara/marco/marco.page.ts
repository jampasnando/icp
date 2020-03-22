import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
@Component({
  selector: 'app-marco',
  templateUrl: './marco.page.html',
  styleUrls: ['./marco.page.scss'],
})
export class MarcoPage implements OnInit {
  fotomarco:string="";
  constructor(private modalCtrl:ModalController,private navParams:NavParams) { }

  ngOnInit() {
    this.fotomarco=this.navParams.get("fotox");
  }
  cierra(){
    this.modalCtrl.dismiss();
  }
  sube(){
    this.modalCtrl.dismiss("subir");
  }
  guarda(){
    this.modalCtrl.dismiss("guardar");
  }
}
