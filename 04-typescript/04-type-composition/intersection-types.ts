{
  type Some = number & string;
  let id: Some;
  // id = 100;
  // console.log(typeof id);

  type A = { foo: number };
  type B = { bar: string };
  type C = {
    foo?: number;
    baz: boolean;
  };

  type AnB = A & B;
  type AnC = A & C;
  type CnAorB = C & (A | B);

  const type1: AnB = {foo: 1000, bar: 'bar'};
  const type2: AnC = {foo: 1000, baz: false};
  const type3: CnAorB = {bar: 'bar', baz: true};

  console.log(type1, type2, type3);
}
