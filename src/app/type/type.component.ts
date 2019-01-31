import { Component, OnInit } from '@angular/core';
import {TypeService} from '../type.service';
import {Type} from '../type';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})

export class TypeComponent implements OnInit {
  types: Type[];
  constructor(private typeService: TypeService) { }

  ngOnInit() {
    this.getTypes();
  }


  getTypes(): void{
    this.typeService.getTypes().subscribe(types => {this.types = types;
    console.log(this.types);
    });
  }


}
