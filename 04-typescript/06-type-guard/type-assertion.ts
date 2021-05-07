{
  type User = { username: string; address: { zipcode: string; town: string } };

  const str = `{ "username": "party", "town": "Maple Town" }`;
  const data: unknown = JSON.parse(str);
  const user = data as User;

  console.log(user.address.town);

  const n = 123;
  const s1 = String(n);
  console.log(typeof s1);

// const s2 = n as string;
  const s3 = (n as unknown) as string;
  console.log(s3.split(','));
}
