import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import {ActivatedRoute} from '@angular/router';
import {Pokemon} from '../pokemon';
import {Move} from '../move';
import {MoveService} from '../move.service';
import {DataSend} from '../dataSend';
import {Router} from '@angular/router';

@Component({
  selector: 'app-formulain',
  templateUrl: './formulain.component.html',
  styleUrls: ['./formulain.component.css']
})
export class FormulainComponent implements OnInit {

  constructor(private pokemonService: PokemonService, private moveService: MoveService,
              private route: ActivatedRoute, private router: Router) { }

  poke: Pokemon = new Pokemon();
  moves: Move[];
  pokemons: Pokemon[];

  dataSend: DataSend = new DataSend();



  ngOnInit() {
    this.moves = [];
    this.poke.setName(this.route.snapshot.paramMap.get('id'));
    this.pokemonService.getPokemons().subscribe(pokemon => this.pokemons = pokemon['results']);


    this.moveService.getMoves(this.poke.name).subscribe(data => {

      for (let move of data['moves']) {
        this.moves.push({name: move['move']['name']});
      }
    });

  }


  onSubmit() {
    this.dataSend.pokeA = this.poke.name;
    this.router.navigateByUrl(`/calcul/${this.dataSend.pokeA}/${this.dataSend.pokeB}/${this.dataSend.levelA}/${this.dataSend.levelB}/${this.dataSend.attack}/${this.dataSend.move}`);
  }

}
