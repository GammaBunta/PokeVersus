import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { TypeComponent } from './type/type.component';
import {AppRoutingModule} from './app-routing.module';
import { FormulainComponent } from './formulain/formulain.component';
import { MovesComponent } from './moves/moves.component';
import { CalculComponent } from './calcul/calcul.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    TypeComponent,
    FormulainComponent,
    MovesComponent,
    CalculComponent,
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
