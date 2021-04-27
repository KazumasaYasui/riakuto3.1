const override = <T, U extends T>(obj1: T, obj2: U): T & U => ({
  ...obj1,
  ...obj2,
})

const objA = override({ a: 1 }, { a: 24, b: 8 });
// const objB = override({ a: 1 }, { x: 99, y: 100 });

console.log(objA);
