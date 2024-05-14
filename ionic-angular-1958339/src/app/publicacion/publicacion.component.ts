import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BdServiceService } from '../bd-service.service';
import { Publicaciones, Quintillizas } from '../module/datos';
import { TabsComponent } from '../tabs/tabs.component';
import { Router } from '@angular/router';

  @Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {

  constructor(private ruta: ActivatedRoute, private bd: BdServiceService, private tab: TabsComponent, private route: Router) { }

  publicacion: string = this.ruta.snapshot.params['id'];
  publicacionImprimir: any = {}
  clickQ = false; clickP = false;

  ngOnInit(): void { //Esta función se ejecuta cuando el componenta se inicia o se actualiza.
    this.changeClick();
    if(this.clickQ){
      this.readQ();
    }
    if(this.clickP){
      this.readP();
    }
    this.getPublicaciones();
    this.bd.getDatosUsuarioPerfil().subscribe((res : any) => {
      this.usuario = res;
    })
    this.bd.getTarjetaPublicacionFeed(this.publicacion).subscribe(res => {
      let quinti = Object.assign(res);
      this.quintiNuevosDatos = quinti;
    })
  }

  publicaciones: Publicaciones[] = []; //Arreglo de imágenes del perfil.
  indicesP: any = [];
  quintillizas: Quintillizas[] = []; //Arreglo de imágenes del feed.
  indicesQ: any = [];
  quintiNuevosDatos : any = {
    caption : "",
    src : " ",
    usuario : ""
  }
  usuario: any = [ ]
  editando = false;

  readQ(){
    this.bd.getTarjetaPublicacionFeed(this.publicacion).subscribe((res : any) => {
      this.publicacionImprimir = res;
    })
  }

  readP(){
    this.bd.getTarjetaPublicacionPerfil(this.publicacion).subscribe((res : any) => {
      this.publicacionImprimir = res;
    })
  }

  getPublicacion(){
    this.bd.getPublicacionesFeed().subscribe((res : any) => {
      const Res: any = res;
      const Array = Object.keys(res).forEach((key: any) => {       
      if(Res[key] != null){
        (this.quintillizas).push(Res[key]);
        (this.indicesQ).push(key);
      }    
    })
      for(let i = 0; i < this.quintillizas.length; i++){
        this.quintillizas[i].id = this.indicesQ[i];
      }
    })
    this.bd.getPublicacionesUsuarioPerfil().subscribe((res : any) => {
      const Res: any = res;
      const Array = Object.keys(res).forEach((key: any) => {       
      if(Res[key] != null){
        (this.publicaciones).push(Res[key]);
        (this.indicesP).push(key);
      }    
    })
      for(let i = 0; i < this.publicaciones.length; i++){
        this.publicaciones[i].id = this.indicesP[i];
      }
    })
  }

  getPublicaciones() : any {
    this.bd.getPublicacionesUsuarioPerfil().subscribe((res : any) => {
      const Res: any = res;
      const Array = Object.keys(res).forEach((key: any) => {       
      if(Res[key] != null){
        (this.publicaciones).push(Res[key]);
        }    
      })
    })
  }

  changeClick(){
    this.clickQ = this.tab.changeClickQ();
    this.editando = this.tab.changeClickQ();
    this.clickP = this.tab.changeClickP();
  }

  guardar() { //Guardar cambios:
    this.bd.updatePublicacion(this.publicacion, this.quintiNuevosDatos).subscribe(res =>{
      this.quintiNuevosDatos = res;
    })    
    this.editando = !this.editando; //Deshabilita edición.   
    this.route.navigate(['/feed']);
    setTimeout(()=>{
      window.location.reload();
    }, 300);
  }

  cancelar(): void{
    this.editando = !this.editando;
  }
}