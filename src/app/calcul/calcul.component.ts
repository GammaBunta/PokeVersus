import { Component, OnInit } from '@angular/core';
import {Move, MoveDetail} from '../move';
import { PokemonService } from '../pokemon.service';
import {MoveService} from '../move.service';

import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-calcul',
  templateUrl: './calcul.component.html',
  styleUrls: ['./calcul.component.css']
})
export class CalculComponent implements OnInit {

  constructor(private moveService: MoveService, private route: ActivatedRoute) { }

  private move: MoveDetail;


  ngOnInit() {
    this.moveService.getMoveDetail(this.route.snapshot.paramMap.get('move')).subscribe(data => this.move = data);

  }

}
