{
  interface User {
    name: string;
  }

  interface User {
    age: number;
  }

  interface User {
    species: 'rabbit' | 'bear' | 'fox' | 'dog';
  }

  const rolly: User = {
    name: 'Rolly Cocker',
    age: 8,
    species: 'dog',
  };

  console.log(rolly);
}
