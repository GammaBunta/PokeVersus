import { Component, OnInit } from '@angular/core';
import { Type, TypeDetail } from '../type';
import { EfficaciteService } from '../efficacite.service';

@Component({
  selector: 'app-test-efficacite',
  templateUrl: './test-efficacite.component.html',
  styleUrls: ['./test-efficacite.component.css']
})
export class TestEfficaciteComponent implements OnInit {

  att: Type = { name : 'flying' };
  def: Type = { name : 'bug' };
  result = 1;

  constructor(private effserv: EfficaciteService) {}


  ngOnInit() {
    this.effserv.getTypeDetail(this.att).subscribe(result => {
        this.result = this.callback(result, this.def);
    });
  }

    private callback(attack: TypeDetail, defense: Type): number {
        attack.damage_relations.double_damage_to.forEach(element => {
            if (defense.name.includes(element.name.toString())) {
                return 2;
            }
        });
        attack.damage_relations.half_damage_to.forEach(element => {
            if (defense.name.includes(element.name.toString())) {
                return 1 / 2;
            }
        });
        attack.damage_relations.no_damage_to.forEach(element => {
            if (defense.name.includes(element.name.toString())) {
                return 0;
            }
        });
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
