import { NgModule } from '@angular/core';
import {PokemonComponent} from './pokemon/pokemon.component';
import {TypeComponent} from './type/type.component';
import {MovesComponent} from './moves/moves.component';
import {RouterModule, Routes} from '@angular/router';
import {CalculComponent} from './calcul/calcul.component';


const routes: Routes = [
  {path: 'types', component: TypeComponent },
  {path : '', redirectTo: '/types', pathMatch: 'full'},
  {path : 'pokemon', component : PokemonComponent},
  {path: 'moves/:id', component: MovesComponent},
  {path : 'calcul/:nomPokeA/:attackName/:lvlA/:nomPokeB/:lvlB', component : CalculComponent}
];

@NgModule({
  exports : [RouterModule],
  declarations: [],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
