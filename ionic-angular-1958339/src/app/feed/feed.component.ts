import { Component, OnInit } from '@angular/core';
import { BdServiceService } from '../bd-service.service';
import { Quintillizas } from '../module/datos';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  constructor(private db: BdServiceService) { }

  ngOnInit(): void {
    this.getPublicaciones();
  }

  quintillizas: Quintillizas[] = [];
  indices : any = []; //Arreglo para almacenar los ID numéricos.

  getPublicaciones() : any {
    this.db.getPublicacionesFeed().subscribe((res : any) => {
      console.log(this.quintillizas);
      const Res: any = res;
      const Array = Object.keys(res).forEach((key: any) => {       
      if(Res[key] != null){
        (this.quintillizas).push(Res[key]);
        (this.indices).push(key);
      }    
    })
      for(let i = 0; i < this.quintillizas.length; i++){
        this.quintillizas[i].id = this.indices[i];
      }
    })
  }
}