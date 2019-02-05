import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Type, TypeDetail } from './type';

@Injectable({
  providedIn: 'root'
})
export class EfficaciteService {

    constructor(private http: HttpClient) {}
    private pokeUrl = 'https://pokeapi.co/api/v2/';
    private typeInDetail: TypeDetail;
    private lastTypeFetch: Type;

    private updateType(type: Type) {
        if (this.lastTypeFetch.name.includes(type.name.toString())) {
            this.lastTypeFetch = type;
            const urlGetAtt = `${this.pokeUrl}type/${type.name}`;
            this.http.get<TypeDetail>(urlGetAtt).subscribe(result => this.typeInDetail = result);
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
        this.updateType(attack);

        if (this.defIn(defense, 'double_damage_to')) {
            return 2;
        }
        if (this.defIn(defense, 'half_damage_to'))   {
            return 1 / 2;
        }
        if (this.defIn(defense, 'no_damage_to'))     {
            return 0;
        }
        return 1;
    }

    private defIn(defense: Type, search: string): boolean {
        this.typeInDetail.damage_relations[search].forEach(element => {
            if (defense.name.includes(element['name'])) {
                return true;
            }
        });
        return false;
    }
}
