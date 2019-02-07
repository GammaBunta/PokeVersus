import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MoveDetail } from './json_classes';

@Injectable({providedIn: 'root'})

export class MoveService {
  private pokeUrl = 'https://pokeapi.co/api/v2';
  constructor(private http: HttpClient) {}

  getMoveDetail(attackName: String): Observable<MoveDetail> {
    const url =  `${this.pokeUrl}/move/${attackName}/`;
    return this.http.get<MoveDetail>(url);
  }


}
