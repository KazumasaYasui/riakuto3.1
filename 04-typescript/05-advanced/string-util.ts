{
  type Company = 'Apple' | 'IBM' | 'GitHub';

  type C1 = Lowercase<Company>;

  type C2 = Uppercase<Company>;

  type C3 = Uncapitalize<Company>;

  type C4 = Capitalize<Company>;

  const c1: C1 = 'apple';
  const c2: C2 = 'APPLE';
  const c3: C3 = 'iBM';
  const c4: C4 = 'GitHub';
  console.log(c1, c2, c3, c4);
}
