class Mammal {
  readonly id = '哺乳類';
  height: number;
  weight: number;
  barks: string;

  constructor(height: number, weight: number, barks: string) {
    this.height = height;
    this.weight = weight;
    this.barks = barks
  }

  getBMI = (): number => (this.weight / (this.height ** 2)) * 10000;

  getBarks = (): string => this.barks;
}

class Cat {
  readonly id = '猫';
  height: number;
  weight: number;
  readonly barks: string = 'meow';

  constructor(height: number, weight: number) {
    this.height = height;
    this.weight = weight;
  }

  getBMI = () => new Mammal(this.height, this.weight, this.barks).getBMI();

  getBarks = () => `${new Mammal(this.height, this.weight, this.barks).getBarks()}!!!`;
}

class Person {
  readonly id = '人間';
  height: number;
  weight: number;
  name: string;

  constructor(height: number, weight: number, name: string) {
    this.height = height;
    this.weight = weight;
    this.name = name;
  }

  getBMI = () => new Mammal(this.height, this.weight, this.name).getBMI();

  getSelfIntroduction = () => `はじめまして。私は${new Mammal(this.height, this.weight, this.name).getBarks()}です。どうぞ、よろしくお願いします！`;
}

const cat1 = new Cat(20, 5);
console.log(cat1.getBarks());
console.log(cat1.getBMI());

const person1 = new Person(180, 77, 'やすいかずまさ');
console.log(person1.getSelfIntroduction());
console.log(person1.getBMI());
