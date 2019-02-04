import { NgModule } from '@angular/core';
import {PokemonComponent} from './pokemon/pokemon.component';
import {TypeComponent} from './type/type.component';
import {MovesComponent} from './moves/moves.component';
import {RouterModule, Routes} from '@angular/router';
import {CalculComponent} from './calcul/calcul.component';


const routes: Routes = [
  {path: 'types', component: TypeComponent },
  {path : '', redirectTo: '/types', pathMatch: 'full'},
<<<<<<< HEAD
  {path : 'pokemon', component : PokemonComponent},
  {path: 'moves/:id', component: MovesComponent},
  {path : 'calcul/:nomPokeA/:attackName/:lvlA/:nomPokeB/:lvlB', component : CalculComponent}
=======
  {path : 'pokemon/:id', component : PokemonComponent}
  {path: 'moves', component: MovesComponent}

>>>>>>> 535b0a209d4e348ffdaf7761b54e14cfb329d0fe
];

@NgModule({
  exports : [RouterModule],
  declarations: [],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
