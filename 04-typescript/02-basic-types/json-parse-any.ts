const str = `{ "id": 1, "username": "party" }`;
const user = JSON.parse(str);

console.log(user.id, user.address.zipCode);
