import { NgModule } from '@angular/core';
import {PokemonComponent} from './pokemon/pokemon.component';
import {TypeComponent} from './type/type.component';
<<<<<<< HEAD
import {FormulainComponent} from './formulain/formulain.component';
import {RouterModule, Routes} from '@angular/router';

=======
import {MovesComponent} from './moves/moves.component';
import {RouterModule, Routes} from '@angular/router';


>>>>>>> b3cd2320b7876a695d4067c3105ed86b4b159eb6
const routes: Routes = [
  {path: 'types', component: TypeComponent },
  {path : '', redirectTo: '/types', pathMatch: 'full'},
  {path : 'pokemon', component : PokemonComponent},
<<<<<<< HEAD
  {path : 'formulain/:id', component : FormulainComponent}
=======
  {path: 'moves', component: MovesComponent}
>>>>>>> b3cd2320b7876a695d4067c3105ed86b4b159eb6
];

@NgModule({
  exports : [RouterModule],
  declarations: [],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
