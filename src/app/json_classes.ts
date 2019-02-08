
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

export class Stat {
  base_stat: number;
}

export class Pokemon {
  name: String ;
}
export class PokemonDetail {
  name: String ;
  id: number ;
  moves: Move[];
  types: MetaType[];
  stats: Stat[];
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

export class DataSend {
  pokeA: String;
  pokeB: String;
  levelA: number;
  levelB: number;
  attack: number;
  move: String;
}

