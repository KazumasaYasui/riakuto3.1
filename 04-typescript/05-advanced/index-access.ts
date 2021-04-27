{
  const permissions = {
    r: 0b100 as const,
    w: 0b010 as const,
    x: 0b001 as const,
  };

  type PermsChar = keyof typeof permissions;
  type PermsNum = typeof permissions[PermsChar];

  const readable: PermsNum = 4;
  // const writeable: PermsNum = 99;
  console.log(readable);
}
