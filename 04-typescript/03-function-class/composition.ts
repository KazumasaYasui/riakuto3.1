import { Rectangle } from "./rectangle";

export class SquareC {
  readonly name = 'square';
  side: number;

  constructor(side: number) {
    this.side = side;
  }

  getArea = () => new Rectangle(this.side, this.side).getArea();
}
