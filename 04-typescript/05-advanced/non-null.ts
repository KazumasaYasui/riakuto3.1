{
  type T1 = NonNullable<string | number | undefined>;

  type T2 = NonNullable<number[] | null | undefined>;

  // const str1: T1 = undefined;
  const str2: T1 = 'hoge';

  // const arr1: T2 = null;
  const arr2: T2 = [1, 2, 3];

  console.log(str2, arr2);
}
