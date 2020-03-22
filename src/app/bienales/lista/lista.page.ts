import { Component, OnInit } from '@angular/core';
import { BienalesService } from '../../service/bienales.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {
proy="BO0284";
mes="6";
ano="2018"
datos:any=[];
  constructor(private consultas:BienalesService,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.proy=this.activatedRoute.snapshot.paramMap.get("proy");
    this.mes=this.activatedRoute.snapshot.paramMap.get("mes");
    this.ano=this.activatedRoute.snapshot.paramMap.get("ano");
    this.consultas.obtienebienales(this.proy,this.mes,this.ano).subscribe((data:any)=>{
      this.datos=data;
      console.log(this.datos);
    },(err)=>{
      alert("errorbd");
    });
  }

}
