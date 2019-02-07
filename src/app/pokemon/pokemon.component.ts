import { Component, OnInit } from '@angular/core';
import {PokemonService} from '../pokemon.service';
import {Pokemon} from '../json_classes';
import {ActivatedRoute} from '@angular/router';
import { TypeService } from '../type.service';


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  pokemons: Pokemon[];
  id: String;
  constructor(private typeService: TypeService,
              private route: ActivatedRoute) {}




  ngOnInit() {
    this.getPokemonTypes();
  }

  getPokemonTypes(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.typeService.getTypeDetail(this.id.toString()).subscribe(data => this.pokemons = data['pokemon']);
  }

}
