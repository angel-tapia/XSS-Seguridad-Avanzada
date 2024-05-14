import { Component, OnInit } from '@angular/core';
import { BdServiceService } from './bd-service.service';
import { Router } from '@angular/router';

@Component({ //Decorador de la app:
  selector: 'app-root', //Se define el nombre de la etiqueta con la que se podrá mandar a llamar a este componente.
  templateUrl: './app.component.html', //Asocia la lógica de este TypeScript con la vista del HTML.
  styleUrls: ['./app.component.css'] //Asociar los estilos del CSS.
})

export class AppComponent implements OnInit {
  title = 'ionic-angular-1958339';
  perfil = true; cargada : boolean = true;

  constructor(private bd: BdServiceService, private router: Router) {}

  ngOnInit(): void {
    this.cargada = true;
  }

  togglePerfil() : void { //Función para cambiar de vista.
    this.perfil = !this.perfil; //this hace referencia a cualesquiera de las propiedades de este componente.
  }

  cerrar(){
    this.router.navigate(['/login']);
    this.cargada = false;
  }

  buscar(evento: any){
    let text = evento.target.value;
    text = text.trim();
    console.log(text);
    this.router.navigate(['/search'], { queryParams: { q: text } });
  }

}