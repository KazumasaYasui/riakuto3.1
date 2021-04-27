{
  type Partial2<T> = { [K in keyof T]?: T[K] };

  type Required2<T> = { [K in keyof T]-?: T[K] };

  type Readonly2<T> = { readonly [K in keyof T]: T[K] };

  type RequiredUser = {
    id: string,
    name: string,
  }

  type OptionalUser = {
    id?: string,
    name?: string,
  }

  const user1a: Partial2<RequiredUser> = {
    id: '123abc',
  }
  const user1b: Partial<RequiredUser> = {
    id: '123abc',
  }
  console.log(user1a, user1b);

  const user2a: Required2<OptionalUser> = {
    id: '123abc',
    name: 'hoge',
  }
  const user2b: Required<OptionalUser> = {
    id: '123abc',
    name: 'hoge',
  }
  console.log(user2a, user2b);

  const user3a: Readonly2<RequiredUser> = {
    id: '123abc',
    name: 'hoge',
  }
  const user3b: Readonly<RequiredUser> = {
    id: '123abc',
    name: 'hoge',
  }
  // user3a.id = '789xyz';
  // user3b.name = 'fuga';
}
