import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BdServiceService } from '../bd-service.service';
import { Publicaciones } from '../module/datos';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})

export class PerfilComponent implements OnInit {

  constructor(private http: HttpClient, private db: BdServiceService) { }

  ngOnInit(): void {
    this.getPublicaciones();
    this.db.getDatosUsuarioPerfil().subscribe((res : any) => {
      this.usuario = res;
      this.usuario.posts = this.publicaciones.length;
    })
  }

  usuario: any = {  }
  editando = false;

  toggleEditar() : void{
    this.editando = !this.editando;
  }

  //Decorador para declarar un valor de entrada:
  @Input() bio: string = "";

  guardarBio(): void {
    this.usuario.bio = this.bio;
    this.toggleEditar();
  }  
  
  publicaciones: Publicaciones[] = [];

  getPublicaciones() : any {
    this.db.getPublicacionesUsuarioPerfil().subscribe((res : any) => {
      const Res: any = res;
      const Array = Object.keys(res).forEach((key: any) => {       
      if(Res[key] != null){
        (this.publicaciones).push(Res[key]);
        }    
      })
    })
  }
}