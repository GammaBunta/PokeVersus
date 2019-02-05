import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Type, TypeDetail } from './type';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EfficaciteService {

    constructor(private http: HttpClient) {}
    private pokeUrl = 'https://pokeapi.co/api/v2/';

    getTypeDetail(type: Type): Observable<TypeDetail> {
        const urlGetAtt = `${this.pokeUrl}type/${type.name}/`;
        return this.http.get<TypeDetail>(urlGetAtt);
    }


}
