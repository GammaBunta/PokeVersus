import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {Pokemon} from '../type';
import {Move} from '../move';

@Component({
  selector: 'app-formulain',
  templateUrl: './formulain.component.html',
  styleUrls: ['./formulain.component.css']
})
export class FormulainComponent implements OnInit {

  constructor(private pokemonService: PokemonService,
              private route: ActivatedRoute) { }

  poke: Pokemon;
  move: Move;
  poke_level: number;
  att: number;
  att_spe: number;
  
  def: Pokemon;
  def_level: number;

  pokemons: Observable<Pokemon>;
  moves: Observable<Move[]>;

  selectDef(p: Pokemon) {
    this.def = p;
  }

  selectMove(m: Move) {
    this.move = m;
  }

  ngOnInit() {
    this.pokemonService.getPokemon(+this.route.snapshot.paramMap.get('id')).subscribe(pokemon => this.poke = pokemon);
    this.pokemonService.getPokemons().subscribe(pokemons => this.pokemons = pokemons);
  }

}
