import { Component, OnInit } from '@angular/core';
import { BdServiceService } from '../bd-service.service';
import { ActivatedRoute } from '@angular/router';
import { TabsComponent } from '../tabs/tabs.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.css']
})
export class PopoverComponent implements OnInit {

  constructor(private db: BdServiceService, private ruta: ActivatedRoute, private tab: TabsComponent, private route: Router) { }

  ngOnInit(): void {
  }

  id: string = this.ruta.snapshot.params['id'];
  clickQ = false; clickP = false; editando = false;

  borrar(): void {
    this.changeClick();
    if(this.clickQ){
      this.borrarQ();
    }
    if(this.clickP){
      this.borrarP();
    }
  }

  borrarQ(){
    this.db.deletePublicacionFeed(this.id).subscribe((res : any) => {
      alert("Publicación eliminada.");
      this.route.navigate(['/feed']);
      setTimeout(()=>{
        window.location.reload();
      }, 300);
    })  
  }

  borrarP(){
    this.db.deletePublicacionPerfil(this.id).subscribe((res : any) => {
      alert("Publicación eliminada.");
      this.route.navigate(['/perfil']);
      setTimeout(()=>{
        window.location.reload();
      }, 300);
    })  
  }

  editar() : boolean {
    this.editando = true;
    return this.editando
  }

  changeClick(){
    this.clickQ = this.tab.changeClickQ();
    this.clickP = this.tab.changeClickP();
  }

  report(){
    alert("Se ha enviado un reporte de esta publicación.");
  }

  back(){
    this.route.navigate(['/perfil'])
    setTimeout(()=>{
      window.location.reload();
    }, 10);
  }
}