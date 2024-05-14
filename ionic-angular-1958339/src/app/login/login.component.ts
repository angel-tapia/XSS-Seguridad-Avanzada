import { Component, OnInit, Input } from '@angular/core';
import { BdServiceService } from '../bd-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private bd: BdServiceService, private route: Router) { }

  ngOnInit(): void {
  this.bd.getDatosUsuarioPerfil().subscribe((res : any) => {
    this.usuario = res;
  })
  }

  usuario: any = [ ]
  cargada = true;
  @Input() user : string = "";
  @Input() password : string = "";
  login(){
    if(this.user == this.usuario.usuario){
      if(this.password == this.usuario.contraseña){
        this.route.navigate(['**']);
        setTimeout(() => {
          window.location.reload();
        }, 10);
      }
      else{
        alert("Contraseña incorrecta.");
      }
    }
    else{
      alert("Usuario y/o contraseña incorrectos.");
    }
  }

  changeCarga() : boolean{
    this.cargada = false;
    return this.cargada
  }
}