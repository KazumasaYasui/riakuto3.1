import { Rectangle } from "./rectangle";

export class SquareI extends Rectangle {
  readonly name = 'square';
  side: number;

  constructor(side: number) {
    super(side, side);
  }
}
