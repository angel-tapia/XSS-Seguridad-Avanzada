import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { take } from 'rxjs';
import { BdServiceService } from '../bd-service.service';
import { CamaraService } from '../camara.service';

interface Quinti {
  caption: string,
  src: any,
  usuario: string
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private db: BdServiceService, private fotoService: CamaraService) { }

  ngOnInit(): void {
  }

  nuevoPost : Quinti = {
    caption: "", 
    src: "", 
    usuario: "@"
  }

  caption : string = "";
  src : string = "assets/imagenes/";
  user : string = "";

  upload(f: NgForm) {
    this.nuevoPost["caption"] = this.caption;
    this.nuevoPost["usuario"] = '@'+this.user;
    this.nuevoPost["src"] = this.src;
    this.db.postPublicacion(this.nuevoPost).subscribe( res => {
      console.log(this.nuevoPost);
      alert("Nueva publicación agregada.");
    });
    this.nuevoPost["caption"] = "";
    this.nuevoPost["usuario"] = "";
    this.nuevoPost["src"] = "";
  }

  async takePhoto() {
    this.fotoService.addNewToGallery();
  }

}
