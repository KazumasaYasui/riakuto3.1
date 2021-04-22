enum Pet { Cat, Dog, Rabbit}
console.log(Pet.Cat, Pet.Dog, Pet.Rabbit);

let Tom: Pet = Pet.Cat;
console.log(Tom);

Tom = Pet.Dog;
console.log(Tom);

Tom = 12;
console.log(Tom);


enum NewPet {
  Cat = 'Cat',
  Dog = 'Dog',
  Rabbit = 'Rabbit',
}

let Bob: NewPet = NewPet.Cat;
// Bob = 'Hamster'; // enumの型安全でエラー
// Bob = 'Dog'; // enumの型安全でエラー
console.log(Bob);

Bob = NewPet.Dog
console.log(Bob);
