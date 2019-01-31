import {MoveService} from '../move.service';
import {Move} from '../move';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {forEach} from '@angular/router/src/utils/collection';


@Component({
  selector: 'app-moves',
  templateUrl: './moves.component.html',
  styleUrls: ['./moves.component.css']
})

export class MovesComponent implements OnInit {
  moves: Move[];
  nomPoke: String;

  constructor( private route: ActivatedRoute,
               private moveService: MoveService){ }

  ngOnInit() {
    this.getMoves();
    this.moves = [];
  }

  getMoves(): void {
    this.nomPoke = this.route.snapshot.paramMap.get('nom');
    this.moveService.getMoves().subscribe(data => {

      for (let move of data['moves']) {
        this.moves.push({name: move['move']['name']});
      }
    });
    console.log(this.moves);

}

}
