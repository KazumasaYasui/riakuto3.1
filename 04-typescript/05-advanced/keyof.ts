{
  const permissions = {
    r: 0b100,
    w: 0b010,
    x: 0b001,
  };

  type PermsChar = keyof typeof permissions;
  const readable: PermsChar = 'r';
  // const writeable: PermsChar = 'z';

  console.log(readable);
}
