import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PublicacionComponent } from './publicacion/publicacion.component';
import { PostComponent } from './post/post.component';
import { LoginComponent } from './login/login.component';
import { SearchbarComponent } from './searchbar/searchbar.component';

const routes: Routes = [
  { path: 'feed', component: FeedComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'publicacion/:id', component: PublicacionComponent },
  { path: "post", component: PostComponent },
  { path: "login", component: LoginComponent},
  { path: "search", component: SearchbarComponent}, //El "**" es para poner una ruta default a nuestro localhost.
  { path: "**", component: PerfilComponent }, //NOTA: Esta línea de código no se debe de poner al principio del arreglo.
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesModule { }