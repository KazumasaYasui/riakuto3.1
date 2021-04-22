{
  let id: number | string = 208239;
  console.log(id);

  id = 'a6ba7fb9-8435-4226-804e-387f3d2e53a7';
  console.log(id);


  type A = {
    foo: number;
    bar?: string;
  };

  type B = { foo: string };
  type C = { bar: string };
  type D = { baz: boolean };

  type AorB = A | B;
  type AorC = A | C;
  type AorD = A | D;

  const type1: AorB = {foo: 'foo'};
  const type2: AorC = {foo: 0, bar: 'bar'};
  const type3: AorD = {foo: 0, bar: 'bar', baz: true};

  console.log(type1, type2, type3);
}