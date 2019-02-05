import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {Pokemon} from '../pokemon';
import {Move} from '../move';
import {MoveService} from '../move.service';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
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

  dataSend: DataSend = new DataSend();



  ngOnInit() {
    this.moves = [];
    this.poke.setName(this.route.snapshot.paramMap.get('id'));
    this.moveService.getMoves(this.poke.name).subscribe(data => {

      for (let move of data['moves']) {
        this.moves.push({name: move['move']['name']});
      }
    });
    console.log(this.moves);
  }


  onSubmit() {
    this.dataSend.pokeA = this.poke.name;
    console.log(this.dataSend.move);
    console.log(this.dataSend);
    this.router.navigateByUrl('URL');
  }

}
