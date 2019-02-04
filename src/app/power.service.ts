import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({providedIn: 'root'})

export class PowerService {

  constructor(private http: HttpClient) {}

  private pokeUrl = 'https://pokeapi.co/api/v2/';
//  private tab: Observable<T> ;

/*  getPower(attackName: String): number {
    const url =  `${this.pokeUrl}move/${attackName}/`;
    this.tab = this.http.get(url);
    return this.tab['power'];
  }*/
}
