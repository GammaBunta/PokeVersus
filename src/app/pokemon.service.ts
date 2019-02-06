import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Pokemon} from './pokemon';



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
    const url = `${this.pokeUrl}/pokemon/?limit=964`;
    return this.http.get(url);
  }


  getDef(id: String): Observable<any>{
    const url = `${this.pokeUrl}/pokemon/${id}`;
    return this.http.get(url);
  }
}
