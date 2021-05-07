type Species = 'rabbit' | 'fox' | 'dog';

interface Resident {
  name: string;
  age: number;
  species: Species;
}

const isCanine = (resident: Resident): boolean =>
  ['dog', 'fox'].includes(resident.species);

export { Species, Resident, isCanine };
