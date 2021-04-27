{
  type Flatten<T> = T extends Array<infer U> ? U : T;

  const num = 5;
  const arr = [3, 6, 9];
  type A = Flatten<typeof arr>;
  type N = Flatten<typeof num>;

  const num1: A = 9999;
  const num2: N = 5;
  // const num3: N = 10;

  console.log(num1, num2);
}
