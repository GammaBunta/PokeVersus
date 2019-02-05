import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Pokemon} from './pokemon';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private pokeUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  getPokemonType(id: String): Observable<any> {
    const url = `${this.pokeUrl}/type/${id}`;
    return this.http.get(url);
  }


  getPokemons(): Observable<any> {
    const url = `${this.pokeUrl}/pokemon/`;
    return this.http.get(url);
  }
}
