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

export class Move {
  name: String;
  url: String;
  
}
