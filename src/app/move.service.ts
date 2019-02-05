import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {MoveDetail} from './move';

@Injectable({providedIn: 'root'})

export class MoveService {

  constructor(private http: HttpClient) {}

  private pokeUrl = 'https://pokeapi.co/api/v2';
  private tab: Observable<T> ;

  getMoves(id: String): Observable<any> {
    const url = `${this.pokeUrl}/pokemon/${id}/`;
    return this.http.get(url);
  }


  getMoveDetail(attackName: String): Observable<MoveDetail> {
    const url =  `${this.pokeUrl}/move/${attackName}/`;
    return this.http.get<MoveDetail>(url);
  }

}
