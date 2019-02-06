import { Component, OnInit } from '@angular/core';
import { Type, TypeDetail } from '../type';
import { EfficaciteService } from '../efficacite.service';
import { deepEqual } from 'assert';

@Component({
  selector: 'app-test-efficacite',
  templateUrl: './test-efficacite.component.html',
  styleUrls: ['./test-efficacite.component.css']
})
export class TestEfficaciteComponent implements OnInit {

  att: Type = { name : 'ground' };
  def: Type[] = [ { name : 'poison' }, { name : 'bug' } ];
  result = -1;

  constructor(private effserv: EfficaciteService) {}


  ngOnInit() {
    this.effserv.getTypeDetail(this.att).subscribe(result => {
        let efficacite = 1;
        // tslint:disable-next-line:prefer-const
        for (let type of this.def) {
            efficacite *= this.callback(result, type);
        }
        this.result = efficacite;
    });
  }
/* Quand intégrée, cette méthode devra remplacer les defense.name par des defense['name']
*/
    private callback(attack: TypeDetail, defense: Type): number {
        // tslint:disable-next-line:prefer-const
        for (let element of attack['damage_relations']['double_damage_to']) {
                if (defense.name.charAt(0) === element['name'].charAt(0) && defense.name.charAt(1) === element['name'].charAt(1)) {
                    return 2;
                }
        }
        // tslint:disable-next-line:prefer-const
        for (let element of attack['damage_relations']['half_damage_to']) {
                if (defense.name.charAt(0) === element['name'].charAt(0) && defense.name.charAt(1) === element['name'].charAt(1)) {
                    return 1 / 2;
                }
        }
        // tslint:disable-next-line:prefer-const
        for (let element of attack['damage_relations']['no_damage_to']) {
                if (defense.name.charAt(0) === element['name'].charAt(0) && defense.name.charAt(1) === element['name'].charAt(1)) {
                    return 0;
                }
        }
        return 1;
    }
/*getEfficacites(attack: Type, defense: Type[]) {
        let efficacite = 1;
        defense.forEach(value => {
            efficacite *= this.getEfficacite(attack, value);
        });
        return efficacite;
    }
*/
}
