import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {Pokemon} from '../type';
import {Move} from '../move';
import {MoveService} from '../move.service';

@Component({
  selector: 'app-formulain',
  templateUrl: './formulain.component.html',
  styleUrls: ['./formulain.component.css']
})
export class FormulainComponent implements OnInit {

  constructor(private pokemonService: PokemonService, private moveService: MoveService,
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
    //GET LE POKE ET MODIFIER L'OBJET POKEMON
    this.pokemonService.getPokemon(+this.route.snapshot.paramMap.get('id')).subscribe(pokemon => this.poke = pokemon);
    this.pokemonService.getPokemons().subscribe(pokemons => this.pokemons = pokemons);
    this.moveService.getMoves(this.poke.name).subscribe(data => {
      for (let move of data['moves']) {
        this.moves.subscribe(data => this.moves =  move['move']['name']);
      }
    });

  }

}
