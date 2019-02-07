import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon, PokemonDetail } from './json_classes';

@Injectable({providedIn: 'root'})

export class PokemonService {
  private pokeUrl = 'https://pokeapi.co/api/v2';
  constructor(private http: HttpClient) {}

  getPokemons(): Observable<Pokemon> {
    const url = `${this.pokeUrl}/pokemon/?limit=964`;
    return this.http.get<Pokemon>(url);
  }

  getPokemonDetail(idOrName: String): Observable<PokemonDetail> {
    const url = `${this.pokeUrl}/pokemon/${idOrName}`;
    return this.http.get<PokemonDetail>(url);
  }
}
