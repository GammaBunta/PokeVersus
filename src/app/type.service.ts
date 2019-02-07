import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Type, TypeDetail} from './json_classes';

@Injectable({providedIn: 'root'})

export class TypeService {
  private pokeUrl = 'https://pokeapi.co/api/v2';
  constructor(private http: HttpClient) {}

  getTypes(): Observable<any> {
    const url = `${this.pokeUrl}/type/`;
    return this.http.get(url);
  }
  getTypeDetail(idOrName: string): Observable<TypeDetail> {
    const urlGetAtt = `${this.pokeUrl}/type/${idOrName}/`;
    return this.http.get<TypeDetail>(urlGetAtt);
  }
}
