import { Component, OnInit } from '@angular/core';
import { BienalesService } from '../service/bienales.service';

@Component({
  selector: 'app-bienales',
  templateUrl: './bienales.page.html',
  styleUrls: ['./bienales.page.scss'],
})
export class BienalesPage implements OnInit {
  proy="BO0284";
  bie:any=[]
  constructor(private resumen:BienalesService) { }

  ngOnInit() {
    this.resumen.obtieneresumen(this.proy).subscribe((datos:any)=>{
      console.log("datos: ",datos);
      this.bie=datos;
    },(err)=>{
      alert("Sin acceso a la red");
    });
  }
  elige(i){
    alert(this.bie[i].cantidad);
  }
}
