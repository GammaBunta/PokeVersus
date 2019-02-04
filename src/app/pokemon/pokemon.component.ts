import { Component, OnInit } from '@angular/core';
import {PokemonService} from '../pokemon.service';
import {Pokemon} from '../pokemon';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  pokemons: Pokemon[];
  id: String;
  constructor(private pokemonService: PokemonService,
              private route: ActivatedRoute) {}



  ngOnInit() {
    this.getPokemonTypes();
  }

  getPokemonTypes(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('poke-compo : ' + this.id);
    this.pokemonService.getPokemonType(this.id).subscribe(data => this.pokemons = data['pokemon']);
  }

}
