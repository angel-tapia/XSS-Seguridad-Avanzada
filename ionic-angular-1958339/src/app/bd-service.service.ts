import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ //Decorador para injectar contenido, referencias, librerías, dependencias, etc.
  providedIn: 'root'
})
export class BdServiceService {

  constructor(private http: HttpClient) { }

  //GET
  getPublicacionesFeed(){
    return this.http.get('https://ionic-angular-firebase-1958339-default-rtdb.firebaseio.com/quintillizas.json')
  }

  getDatosUsuarioPerfil(){
    return this.http.get('https://ionic-angular-firebase-1958339-default-rtdb.firebaseio.com/usuario.json')
  }

  getPublicacionesUsuarioPerfil(){
    return this.http.get('https://ionic-angular-firebase-1958339-default-rtdb.firebaseio.com/usuario/publicaciones.json')
  }

  getTarjetaPublicacionPerfil(id: string){
    return this.http.get('https://ionic-angular-firebase-1958339-default-rtdb.firebaseio.com/usuario/publicaciones/'+ id +'.json')
  }

  getTarjetaPublicacionFeed(id: string){
    return this.http.get('https://ionic-angular-firebase-1958339-default-rtdb.firebaseio.com/quintillizas/'+ id +'.json')
  }


  //POST
  postPublicacion(post: any) {
    return this.http.post('https://ionic-angular-firebase-1958339-default-rtdb.firebaseio.com/quintillizas.json', post)
  }

  //DELETE
  deletePublicacionFeed(id: string){
    return this.http.delete('https://ionic-angular-firebase-1958339-default-rtdb.firebaseio.com/quintillizas/'+ id + '.json')
  }
  
  deletePublicacionPerfil(id: string){
    return this.http.delete('https://ionic-angular-firebase-1958339-default-rtdb.firebaseio.com/usuario/publicaciones/'+ id + '.json')
  } 

  //PUT
  updatePublicacion(id : string, nuevosDatos : any){
    return this.http.put('https://ionic-angular-firebase-1958339-default-rtdb.firebaseio.com/quintillizas/'+ id + '.json', nuevosDatos)
  }

}