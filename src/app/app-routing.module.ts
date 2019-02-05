import { NgModule } from '@angular/core';
import {PokemonComponent} from './pokemon/pokemon.component';
import {TypeComponent} from './type/type.component';
import {RouterModule, Routes} from '@angular/router';
import {FormulainComponent} from './formulain/formulain.component';
import {CalculComponent} from './calcul/calcul.component';


const routes: Routes = [
  {path: 'types', component: TypeComponent },
  {path : '', redirectTo: '/types', pathMatch: 'full'},
  {path : 'pokemon/:id', component : PokemonComponent},
  {path : 'formulain/:id', component : FormulainComponent},
  {path : 'calcul/:pokeA/:pokeB/:levelA/:levelB/:attack/:attackSpe/:move', component : CalculComponent}
];

@NgModule({
  exports : [RouterModule],
  declarations: [],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
