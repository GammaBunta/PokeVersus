import {Component, OnInit} from '@angular/core';
import { MoveDetail, Type, TypeDetail, PokemonDetail} from '../json_classes';
import {MoveService} from '../move.service';
import {ActivatedRoute} from '@angular/router';
import {TypeService} from '../type.service';
import { PokemonService } from '../pokemon.service';
import {angularMath} from 'angular-ts-math';

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
  levelD: number;
  def: number;
  stab: number;
  efficacite: number;
  att: number;
  final: number;


  pokeAget: boolean;
  pokeDget: boolean;
  moveget: boolean;
  movetypedetailget: boolean;


  ngOnInit() {
    this.pokeAget = false;
    this.pokeDget = false;
    this.moveget = false;
    this.movetypedetailget = false;

    const paramMap = this.route.snapshot.paramMap;

    this.def = 50;
    this.att = + paramMap.get('attack');
    this.efficacite = -1;
    this.stab = -1;
    this.levelA = + paramMap.get('levelA');
    this.levelD = + paramMap.get('levelB');
    const moveName = paramMap.get('move');
    const pokeAname = paramMap.get('pokeA');
    const pokeDname = paramMap.get('pokeB');

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
            let i = 0 ;
          // tslint:disable-next-line:prefer-const
            for (let stat of this.pokeD['stats']) {
              if (i === 3) {
                this.def = stat['base_stat'] + 2 * this.levelD ;
              }
              i++;
            }
          console.log('défense pokémon D : ');
          console.log(this.def);


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

          if (this.efficacite && this.pokeA && this.pokeD) {
            this.finalcalcul();
          } else {
            console.log('non');
          }

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


    private finalcalcul() {
      console.log('final');
      const random = angularMath.getIntegerRandomRange(0.85, 1 );

      const CM = this.stab * this.efficacite * random;
      const haut = (this.levelA * 0.4 + 2) * this.att * this.move['power'];

      const bas = (this.def * 50 );

      const calcul = ((haut / bas) + 2) * CM;
      this.final = angularMath.backIntegerOfNumber(calcul);
      console.log('random');
      console.log(random);
      console.log('level A : ')
      console.log(this.levelA);
      console.log('Attaque : ');
      console.log(this.att);
      console.log('Power : ');
      console.log(this.move['power']);
      console.log('Haut');
      console.log(haut);
      console.log('Def : ');
      console.log(this.def);
      console.log('Bas');
      console.log(bas);
      console.log('CM : ');
      console.log(CM);
      console.log('Calcul : ');
      console.log(calcul);
      console.log('final : ');
      console.log(this.final);


  }



}
