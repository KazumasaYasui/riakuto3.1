import { Rectangle } from './rectangle';
import { SquareI } from './inheritance';
import { SquareC } from './composition';
import { RectangleI } from './implements';

const rectangle = new Rectangle(1, 3);
console.log(rectangle.getArea());

const squareI = new SquareI(33);
console.log(squareI.getArea());

const squareC = new SquareC(55);
console.log(squareC.getArea());

const rectangleI = new RectangleI(3, 8);
console.log(rectangleI.getArea());

// const hoge: RectangleI = { sideA: 1, sideB: 2, name: 'rectangle', getArea: () => 1 + 1 }
// console.log(hoge);
