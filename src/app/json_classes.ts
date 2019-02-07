
export class TypeDetail {
    name: String;
    damage_relations: DamageRelations;
}
export class DamageRelations {
    double_damage_to: Type[];
    half_damage_to: Type[];
    no_damage_to: Type[];
}
export class Type {
  name: String;
}

export class MetaType {
    type: Type;
}

export class Pokemon {
  name: String ;
}
export class PokemonDetail {
  name: String ;
  id: number ;
  moves: Move[];
  types: MetaType[];
}

export class Move {
  name: string;
}

export class MoveDetail {
  accuracy: number;
  damage_class: any;
  type: Type;
  power: number;
}
