import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})

export class MoveService {

  constructor(private http: HttpClient) {}

  private pokeUrl = 'https://pokeapi.co/api/v2';

  getMoves(id: String): Observable<any> {
    const url = `${this.pokeUrl}pokemon/${id}/`;
    return this.http.get(url);
  }


}
