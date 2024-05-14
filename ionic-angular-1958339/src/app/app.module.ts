import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular'; //Importa todos los componentes de ionic.
import { FormsModule} from '@angular/forms';
import { PerfilComponent } from './perfil/perfil.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { FeedComponent } from './feed/feed.component';
import { RoutesModule } from './routes.module';
import { TabsComponent } from './tabs/tabs.component';
import { PublicacionComponent } from './publicacion/publicacion.component';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { HistoriasComponent } from './historias/historias.component';
import { HistoriasDetalleComponent } from './historias-detalle/historias-detalle.component';
import { PopoverComponent } from './popover/popover.component';
import { LoginComponent } from './login/login.component';
import { SearchbarComponent } from './searchbar/searchbar.component';

@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    PublicacionesComponent,
    FeedComponent,
    TabsComponent,
    PublicacionComponent,
    PostComponent,
    HistoriasComponent,
    HistoriasDetalleComponent,
    PopoverComponent,
    LoginComponent,
    SearchbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    FormsModule,
    RoutesModule,
    HttpClientModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
  exports: [RoutesModule]
})
export class AppModule { }