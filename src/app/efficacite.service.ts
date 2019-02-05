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
    private typeInDetail: TypeDetail = { damage_relations: null, name: ''};
    private lastTypeFetch: Type = { name: ''};

    getTypeDetail(type: Type): Observable<TypeDetail> {
        const urlGetAtt = `${this.pokeUrl}type/${type.name}/`;
        return this.http.get<TypeDetail>(urlGetAtt);
    }
    private updateType(type: Type, defense: Type): number {
        if (! this.lastTypeFetch.name.includes(type.name.toString())) {
            this.lastTypeFetch = type;
            const urlGetAtt = `${this.pokeUrl}type/${type.name}/`;
            this.http.get<TypeDetail>(urlGetAtt).subscribe(result => {
                this.typeInDetail = result;
                console.log(this.typeInDetail);
                return this.callback(type, defense);
            });
        } else {
            return this.callback(type, defense);
        }
    }
    getEfficacites(attack: Type, defense: Type[]) {
        let efficacite = 1;
        defense.forEach(value => {
            efficacite *= this.getEfficacite(attack, value);
        });
        return efficacite;
    }

    getEfficacite(attack: Type, defense: Type): number {
        return this.updateType(attack, defense);
    }

    private callback(attack: Type, defense: Type): number {
        this.typeInDetail.damage_relations.double_damage_to.forEach(element => {
            if (defense.name.includes(element.name.toString())) {
                return 2;
            }
        });
        this.typeInDetail.damage_relations.half_damage_to.forEach(element => {
            if (defense.name.includes(element.name.toString())) {
                return 1 / 2;
            }
        });
        this.typeInDetail.damage_relations.no_damage_to.forEach(element => {
            if (defense.name.includes(element.name.toString())) {
                return 0;
            }
        });
        return 1;
    }
}
