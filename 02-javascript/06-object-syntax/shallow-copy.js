const patty = {
  name: 'Patty Rabbit',
  email: 'patty@maple.town',
  address: { town: 'Maple Town' },
};

const rolley = { ...patty, name: 'Rolley Cocker' };
rolley.email = 'rolly@palm.town';
rolley.address.town = 'Palm Town';

console.log(patty);
