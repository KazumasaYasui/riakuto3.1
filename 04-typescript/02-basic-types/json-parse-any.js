var str = "{ \"id\": 1, \"username\": \"party\" }";
var user = JSON.parse(str);
console.log(user.id, user.address.zipCode);
