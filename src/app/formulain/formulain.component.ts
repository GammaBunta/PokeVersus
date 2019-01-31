import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {Pokemon, Move, Type} from '../type';

@Component({
  selector: 'app-formulain',
  templateUrl: './formulain.component.html',
  styleUrls: ['./formulain.component.css']
})
export class FormulainComponent implements OnInit {

  constructor(private pokemonService: PokemonService,
              private route: ActivatedRoute) { }

  att: number;
  att_spe: number;

  move: Move;

  poke: Pokemon;
  def: Pokemon;

  pokemons: Observable<Pokemon[]>;
  moves: Observable<Move[]>;

  selectDef(p: Pokemon) {
    this.def = p;
  }

  selectMove(m: Move) {
    this.move = m;
  }


  ngOnInit() {
    this.poke = this.pokemonService.getPokemon(+this.route.snapshot.paramMap.get('id'))
      .subscribe();
    this.pokemons = this.pokemonService.getPokemons().subscribe();
  }

}
