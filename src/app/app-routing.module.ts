import { NgModule } from '@angular/core';
import {PokemonComponent} from './pokemon/pokemon.component';
import {TypeComponent} from './type/type.component';
import {MovesComponent} from './moves/moves.component';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {path: 'types', component: TypeComponent },
  {path : '', redirectTo: '/types', pathMatch: 'full'},
  {path : 'pokemon/:id', component : PokemonComponent}
  {path: 'moves', component: MovesComponent}

];

@NgModule({
  exports : [RouterModule],
  declarations: [],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
