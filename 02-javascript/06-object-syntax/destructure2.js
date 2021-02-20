const response = {
  data: [
    {
      id: 1,
      name: 'Patty Rabbit',
      email: 'patty@maple.town',
    },
    {
      id: 2,
      name: 'Rolley Cocker',
      email: 'rolly@palm.town',
    },
    {
      id: 3,
      name: 'Bobby Bear',
      email: 'bobby@maple.town',
    },
  ],
};

const { data: users = [] } = response;
console.log(users);
