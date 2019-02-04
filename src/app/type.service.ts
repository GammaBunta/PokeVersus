import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})

export class TypeService {

  private pokeUrl = 'http://pokeapi.salestock.net/api/v2';

  constructor(private http: HttpClient) {}

  getTypes(): Observable<any> {
    const url = `${this.pokeUrl}/type/`;
    return this.http.get(url);
  }

}
