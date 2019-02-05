import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { TypeComponent } from './type/type.component';
import {AppRoutingModule} from './app-routing.module';
import { FormulainComponent } from './formulain/formulain.component';
<<<<<<< HEAD
import { TestEfficaciteComponent } from './test-efficacite/test-efficacite.component';
=======
import {FormsModule} from '@angular/forms';
>>>>>>> 1db72082280511555eff702404690181cb824413


@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    TypeComponent,
    FormulainComponent,
    TestEfficaciteComponent,


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
