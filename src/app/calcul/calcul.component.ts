import {Component, OnInit} from '@angular/core';
import { MoveDetail} from '../move';
import {MoveService} from '../move.service';
import {ActivatedRoute} from '@angular/router';
import {TypeService} from '../type.service';
import {Type} from '../type';

@Component({
  selector: 'app-calcul',
  templateUrl: './calcul.component.html',
  styleUrls: ['./calcul.component.css']
})
export class CalculComponent implements OnInit {

  constructor(private moveService: MoveService, private route: ActivatedRoute, private typeService : TypeService) { }

  private move: MoveDetail = new MoveDetail();

  pokeA: String;
  levelA: number;
  def: number;
  typeA: Type[] = [];




  ngOnInit() {
    this.moveService.getMoveDetail(this.route.snapshot.paramMap.get('move')).subscribe(data => this.move.accuracy = data['accuracy']);
    this.moveService.getMoveDetail(this.route.snapshot.paramMap.get('move')).subscribe(data => this.move.damage_class = data['damage_class']);
    this.moveService.getMoveDetail(this.route.snapshot.paramMap.get('move')).subscribe(data => this.move.type = data['type']['name']);
    this.moveService.getMoveDetail(this.route.snapshot.paramMap.get('move')).subscribe(data => this.move.power = data['power']);
    this.def = 50;
    this.levelA = + this.route.snapshot.paramMap.get('levelA');
    this.pokeA = this.route.snapshot.paramMap.get('pokeA');
    this.typeService.getType(this.pokeA).subscribe(data => {

      for (let type of data['types']) {
        this.typeA.push({name: type['type']['name']});
      }
    });
    this.typeService.getType(this.pokeA).subscribe(data => this.typeA = data['types']);
    console.log(this.typeA);
    console.log(Object.keys(this.typeA).length);
    if (Object.keys(this.typeA).length === 2){
      console.log('deux types');
    }else{
      console.log('1 type');
    }

  }
}
