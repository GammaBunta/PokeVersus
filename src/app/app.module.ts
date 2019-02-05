import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { TypeComponent } from './type/type.component';
import {AppRoutingModule} from './app-routing.module';
import { FormulainComponent } from './formulain/formulain.component';
import {FormsModule} from '@angular/forms';
import { CalculComponent } from './calcul/calcul.component';


@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    TypeComponent,
    FormulainComponent,
    CalculComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
