import {Component, OnInit} from '@angular/core';
import { MoveDetail, Type, TypeDetail, PokemonDetail } from '../json_classes';
import {MoveService} from '../move.service';
import {ActivatedRoute} from '@angular/router';
import {TypeService} from '../type.service';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-calcul',
  templateUrl: './calcul.component.html',
  styleUrls: ['./calcul.component.css']
})
export class CalculComponent implements OnInit {
  constructor(private moveService: MoveService, private route: ActivatedRoute,
     private typeService: TypeService, private pokemonService: PokemonService) { }

  move: MoveDetail;
  moveTypeDetail: TypeDetail;
  pokeA: PokemonDetail;
  pokeD: PokemonDetail;
  levelA: number;
  def: number;
  stab: number;
  efficacite: number;

  pokeAget: boolean;
  pokeDget: boolean;
  moveget: boolean;
  movetypedetailget: boolean;


  ngOnInit() {
    this.pokeAget = false;
    this.pokeDget = false;
    this.moveget = false;
    this.movetypedetailget = false;


    this.def = 50;
    this.efficacite = -1;
    this.levelA = + this.route.snapshot.paramMap.get('levelA');
    const moveName = this.route.snapshot.paramMap.get('move');
    const pokeAname = this.route.snapshot.paramMap.get('pokeA');
    const pokeDname = this.route.snapshot.paramMap.get('pokeB');

    this.getMove(moveName);
    this.getPokemonA(pokeAname);
    this.getPokemonD(pokeDname);

  }

  getPokemonA(pokeName: string) {
        this.pokemonService.getPokemonDetail(pokeName).subscribe(data => {
            this.pokeA = data;
            this.pokeAget = true;
            console.log('pokemon attaque :');
            console.log(this.pokeA);
            this.calculSTAB();
        });
  }
  getPokemonD(pokeName: string) {
        this.pokemonService.getPokemonDetail(pokeName).subscribe(data => {
            this.pokeD = data;
            this.pokeDget = true;
            console.log('pokemon defense :');
            console.log(this.pokeD);
            this.calculEfficacite();
        });
  }
  getMove(moveName: string) {
        this.moveService.getMoveDetail(moveName).subscribe(data => {
            this.move = data;
            this.moveget = true;
            console.log('move :');
            console.log(this.move);
            this.getMoveTypeDetail();
            this.calculSTAB();
    });
  }

  getMoveTypeDetail() {
      this.typeService.getTypeDetail(this.move['type']['name'].toString()).subscribe(result => {
          this.moveTypeDetail = result;
          this.movetypedetailget = true;
          console.log('move type detail : ');
          console.log(this.moveTypeDetail);
          this.calculEfficacite();
      });
  }

  private strcmp(s: string, t: string): boolean {
      if ((s.charAt(0) === t.charAt(0)) && (s.charAt(1) === t.charAt(1))) {
          return true;
      }
      return false;
    }
    private calculSTAB() {
    if (this.moveget && this.pokeAget) {
        this.stab = 1;
        console.log('types of poke a :');
        console.log(this.pokeA['types']);
        // tslint:disable-next-line:prefer-const
        for (let element of this.pokeA['types']) {
            if (this.strcmp(this.move['type']['name'].toString(), element['type']['name'].toString())) {
                this.stab = 1.5;
            }
        }
        console.log('stab : ');
        console.log(this.stab);
    }
  }

    private calculEfficacite() {
        if (this.pokeDget && this.movetypedetailget) {
            let efficacite = 1;
            // tslint:disable-next-line:prefer-const
            for (let typeDef of this.pokeD['types']) {
                console.log('typedef :');
                console.log(typeDef);
                efficacite *= this.calculEfficaciteSlave(this.moveTypeDetail, typeDef['type']);
            }
            this.efficacite = efficacite;
            console.log('efficacite : ');
            console.log(this.efficacite);
        }
    }
    private calculEfficaciteSlave(attack: TypeDetail, defense: Type) {
        // tslint:disable-next-line:prefer-const
        for (let element of attack['damage_relations']['double_damage_to']) {
                if (this.strcmp(defense['name'].toString(), element['name'].toString())) {
                    return 2;
                }
        }
        // tslint:disable-next-line:prefer-const
        for (let element of attack['damage_relations']['half_damage_to']) {
                if (this.strcmp(defense['name'].toString(), element['name'].toString())) {
                    return 1 / 2;
                }
        }
        // tslint:disable-next-line:prefer-const
        for (let element of attack['damage_relations']['no_damage_to']) {
                if (this.strcmp(defense['name'].toString(), element['name'].toString())) {
                    return 0;
                }
        }
        return 1;
    }

}
