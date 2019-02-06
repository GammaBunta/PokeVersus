import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Type} from './type';
import {map} from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({providedIn: 'root'})

export class TypeService {

  private pokeUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  getTypes(): Observable<any> {
    const url = `${this.pokeUrl}/type/`;
    return this.http.get(url);
  }

  getType(poke: String ): Observable<any> {
    const url = `${this.pokeUrl}/pokemon/${poke}`;
    return this.http.get(url);
  }


}
