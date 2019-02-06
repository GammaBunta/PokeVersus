
export class Type {
  name: String;
}

export class TypeDetail {
    name: String;
    damage_relations: DamageRelations;
}

export class N {
    n: Type;
}

export class DamageRelations {
    double_damage_to: Type[];
    half_damage_to: Type[];
    no_damage_to: Type[];
}



