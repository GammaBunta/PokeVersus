import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Pokemon} from './type';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private pokeUrl = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) {}

  getPokemons(): Observable<any> {
    const url = `${this.pokeUrl}/pokemon/`;
    return this.http.get(url);
  }

  getPokemon(id: number): Observable<any> {
    const url = `${this.pokeUrl}/pokemon/${id}`;
    return this.http.get(url);
  }

}
