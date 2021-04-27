{
  type Permission = 'r' | 'w' | 'x';

  type RW1 = Extract<Permission, 'r' | 'w'>;

  type RW2 = Exclude<Permission, 'x'>;

  const permission1: RW1 = 'r';

  const permission2: RW2 = 'w';

  console.log(permission1, permission2);
}
