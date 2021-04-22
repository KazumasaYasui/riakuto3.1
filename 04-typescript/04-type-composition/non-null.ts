{
  // const foo: string = null;
  //
  // const bar: number = undefined;

  let foo: string | null = 'fuu!!!';
  console.log(foo);
  foo = null;
  console.log(foo);

  type Resident = {
    familyName: string;
    lastName: string;
    mom?: Resident;
  };

  // const getMomName1 = (resident: Resident): string => resident.mom.lastName;
  const getMomName2 = (resident: Resident): string => resident.mom!.lastName;

  const mom = { familyName: 'Hope-Rabbit', lastName: 'mary' };
  const patty = { familyName: 'Hope-Rabbit', lastName: 'patty', mom: mom };
  // getMomName1(patty)
  console.log(getMomName2(patty));
}
