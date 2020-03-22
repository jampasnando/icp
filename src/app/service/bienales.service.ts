import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BienalesService {
  url="http://sistembo.com/listas/listabienales.php";
  url2="http://sistembo.com/listas/resumenbienales.php";
  constructor(private httpClient:HttpClient) { }
  obtienebienales(proy,mes,ano){
    const params:FormData=new FormData();
    params.append('proy',proy);
    params.append('mes',mes);
    params.append('ano',ano);
    return this.httpClient.post<any>(this.url,params);
  }
  obtieneresumen(proy){
    const params:FormData=new FormData();
    params.append('proy',proy);
    return this.httpClient.post<any>(this.url2,params);
  }
}
