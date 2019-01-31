import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { TypeComponent } from './type/type.component';
import {AppRoutingModule} from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
<<<<<<< HEAD
    TypeComponent
=======
    TypeComponent,
>>>>>>> fed8c751c52283ba6162e3bdee061f36b12dbf9a
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
<<<<<<< HEAD
    AppRoutingModule
=======
    AppRoutingModule,
>>>>>>> fed8c751c52283ba6162e3bdee061f36b12dbf9a
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
