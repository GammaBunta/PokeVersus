import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { TypeComponent } from './type/type.component';
import {AppRoutingModule} from './app-routing.module';
<<<<<<< HEAD
import { FormulainComponent } from './formulain/formulain.component';

=======
import { MovesComponent } from './moves/moves.component';
>>>>>>> b3cd2320b7876a695d4067c3105ed86b4b159eb6

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    TypeComponent,
<<<<<<< HEAD
    FormulainComponent,
=======
    MovesComponent,
>>>>>>> b3cd2320b7876a695d4067c3105ed86b4b159eb6
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
