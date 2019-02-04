import { Move } from "./move";
export class Type{
  name : string;
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

