import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BdServiceService } from '../bd-service.service'; //Importamos la dependencia de los servicios.
import { Publicaciones } from '../module/datos';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {

  constructor(private http: HttpClient, private db: BdServiceService) { } //Inyección de dependencias.

  ngOnInit(): void {
    this.getPublicaciones();
  }

  publicaciones: Publicaciones[] = [];
  indices : any = []; //Arreglo para almacenar los ID numéricos.

  getPublicaciones() : any {
    this.db.getPublicacionesUsuarioPerfil().subscribe((res : any) => {
      console.log(this.publicaciones);
      const Res: any = res;
      const Array = Object.keys(res).forEach((key: any) => {       
      if(Res[key] != null){
        (this.publicaciones).push(Res[key]);
        (this.indices).push(key);
      }    
    })
      for(let i = 0; i < this.publicaciones.length; i++){
        this.publicaciones[i].indice = this.indices[i];
      }
    })
  }
}