{
  const species = ['rabbit', 'bear', 'fox', 'dog'] as const;
  type Species = typeof species[number];

  const dog: Species = 'dog';
  // const cat: Species = 'cat';
  console.log(dog);
}
