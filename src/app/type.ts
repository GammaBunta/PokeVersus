import { Move } from './move';

export class Type {
  name: String;
}

export class TypeDetail {
    name: string;
    damage_relations: any[];
}

export class Pokemon {
  name: String;
  moves: MovePointer[];
}

export class MovePointer {
  move: MoveSpec;
}

export class MoveSpec {
  move: Move;
}

