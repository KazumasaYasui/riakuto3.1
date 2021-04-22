interface Shape {
  readonly name: string;
  getArea: () => number;
}

interface Quadrangle {
  sideA: number;
  sideB?: number;
  sideC?: number;
  sideD?: number;
}

export class RectangleI implements Shape, Quadrangle {
  readonly name = 'rectangle';
  sideA: number;
  sideB: number;

  constructor(sideA: number, sideB: number) {
    this.sideA = sideA;
    this.sideB = sideB;
  }

  getArea = (): number => this.sideA * this.sideB;
}