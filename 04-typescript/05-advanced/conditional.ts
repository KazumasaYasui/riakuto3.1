{
  type User = { id: unknown };
  type NewUser = User & { id: string };
  type OldUser = User & { id: number };
  type Book = { isbn: string };

  type IdOf<T> = T extends User ? T['id'] : never;

  type NewUserId = IdOf<NewUser>;
  type OldUserId = IdOf<OldUser>;
  type BookId = IdOf<Book>;

  const newUserId: NewUserId = '1111';
  const oldUserId: OldUserId = 1111;
  const newUser: NewUser = {id: newUserId};
  const oldUser: OldUser = {id: oldUserId};
  const book: Book = {isbn: '123abc'};

  console.log(newUser, oldUser, book);
}
