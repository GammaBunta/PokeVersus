import { Component, OnInit } from '@angular/core';
import {PowerService} from '../power.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-calcul',
  templateUrl: './calcul.component.html',
  styleUrls: ['./calcul.component.css']
})

export class CalculComponent implements OnInit {
  private power: number;

  constructor( private route: ActivatedRoute,
               private powerService: PowerService) { }


  ngOnInit() {

  }






}
