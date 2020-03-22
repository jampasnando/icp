import { Component } from '@angular/core';
import { CameraPreview, CameraPreviewOptions, CameraPreviewPictureOptions } from '@ionic-native/camera-preview/ngx';
import { ActivatedRoute } from '@angular/router';
import { File, IWriteOptions } from '@ionic-native/file/ngx';
import { ModalController } from '@ionic/angular';
import { MarcoPage } from './marco/marco.page';
@Component({
  selector: 'app-camara',
  templateUrl: 'camara.page.html',
  styleUrls: ['camara.page.scss'],
})
export class CamaraPage {
  foto:string="";
  foto2:string="";
  foto3:string="";
  base64:string;
  altocamara=window.screen.width*1.333333333;
  cincoporciento=this.altocamara*0.05+"px";
  topvertical=this.altocamara*0.05+3+"px";
  bottominferior=(this.altocamara - this.altocamara*0.05 - 3) + "px";
  topcod=(this.altocamara - this.altocamara*0.05 + 3) + "px";
  altovertical=(this.altocamara - 2*this.altocamara*0.05-6) +"px";
  altocodigo=(window.screen.height-this.altocamara-100) + "px";
  cameraPreviewOpts: CameraPreviewOptions = {
    x: 0,
    y: 0,
    // width: window.screen.width,
    // height: window.screen.height,
    width:window.screen.width,
    height:this.altocamara,
    camera: 'rear',
    tapPhoto: true,
    previewDrag: true,
    toBack: true,
    alpha: 1
  };
  cameraPictureOpts:CameraPreviewPictureOptions={
    width:1200,
    height:1600,
    // width:window.innerWidth,
    // height:window.innerHeight,
    quality:100
  };
  codigo:string;
  nombre:string;
  ano:string;
  mes:string;
  alto:string=(window.screen.height - this.altocamara-50)+"px";
  flashx=false;
  constructor(public cameraPreview:CameraPreview,private activatedRoute:ActivatedRoute,private file:File,private modalCtrl:ModalController) {}
  ngOnInit(){
    this.codigo=this.activatedRoute.snapshot.paramMap.get("codigo");
    this.nombre=this.activatedRoute.snapshot.paramMap.get("nombre");
    this.ano=this.activatedRoute.snapshot.paramMap.get("ano");
    this.mes=this.activatedRoute.snapshot.paramMap.get("mes");
    console.log("benef: ",this.nombre);

    // this.alto="500px";
  }
  ionViewDidEnter(){
    console.log("abre");
    this.abrecam();
    console.log(window.screen.height);
    console.log(window.screen.width);
    console.log("altocamara: ",this.altocamara);
    console.log("bottominferior: ", this.bottominferior);
    console.log("cinco%: ",this.altocamara*0.05);
    console.log("altocodigo: ",this.altocodigo);
  }
  async abrecam(){
    this.foto="";
    const result= await this.cameraPreview.startCamera(this.cameraPreviewOpts);
    // this.cameraPreview.setFlashMode(this.cameraPreview.FLASH_MODE.ON);
  }
  tomafoto(){
      this.cameraPreview.takePicture(this.cameraPictureOpts).then((imagen)=>{
        this.base64=imagen;
        if(this.foto==""){this.foto='data:image/jpeg;base64,'+imagen;}
        else
          if(this.foto2==""){this.foto2='data:image/jpeg;base64,'+imagen;}
          else {this.foto3='data:image/jpeg;base64,'+imagen;}
        
        // this.cameraPreview.stopCamera;
      },(err)=>{
        alert("falló");
      });
  }
  cambiaflash($event){
    console.log("previo:", this.flashx);
    this.flashx=!this.flashx;
    if(this.flashx){
      this.cameraPreview.setFlashMode(this.cameraPreview.FLASH_MODE.ON);
    }
    else{
      this.cameraPreview.setFlashMode(this.cameraPreview.FLASH_MODE.OFF);
    }
    console.log("post: ",this.flashx);
  }
  async agranda(auxfoto){
    // alert("agrandará...");
    const modal=await this.modalCtrl.create({
      component:MarcoPage,
      componentProps:
      {
        fotox:auxfoto
      }
    });
    modal.onDidDismiss().then((dato)=>{
      if(dato.data=="guardar"){this.guarda();}
      else if(dato.data=="subir"){
        alert("Subiendo foto...");
      }
    });
    return await modal.present();
  }
  sube(){
    if(confirm("Esta seguro de enviar esta foto???")){
      alert("subiendo....");
    }
  }
  guarda(){
    let ruta=this.file.externalDataDirectory;
    let opciones:IWriteOptions={replace:true};
    let nomarch=this.codigo+'.jpg';
    let blob = this.b64toBlob(this.base64, 'image/jpg');
    this.file.writeFile(ruta, nomarch, blob, opciones).then(res => {
      console.log("guadado en :",ruta," arch: ",nomarch);
      // this.storeImage(name);
      alert("Guardado correctamente");
    }, err => {
      console.log('error: ', err);
    });
  }
  b64toBlob(b64Data, contentType) {
    contentType = contentType || '';
    var sliceSize = 512;
    var byteCharacters = atob(b64Data);
    var byteArrays = [];
   
    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      var slice = byteCharacters.slice(offset, offset + sliceSize);
   
      var byteNumbers = new Array(slice.length);
      for (var i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
   
      var byteArray = new Uint8Array(byteNumbers);
   
      byteArrays.push(byteArray);
    }
   
    var blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }
}