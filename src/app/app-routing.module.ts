import { NgModule } from '@angular/core';
import {PokemonComponent} from './pokemon/pokemon.component';
import {TypeComponent} from './type/type.component';
import {RouterModule, Routes} from '@angular/router';
import {FormulainComponent} from './formulain/formulain.component';


const routes: Routes = [
  {path: 'types', component: TypeComponent },
  {path : '', redirectTo: '/types', pathMatch: 'full'},
  {path : 'pokemon/:id', component : PokemonComponent},
  {path : 'formulain/:id', component : FormulainComponent},
];

@NgModule({
  exports : [RouterModule],
  declarations: [],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
