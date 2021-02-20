// const greeter = (target) => {
//   const sayHello = () => {
//     console.log(`Hi, ${target}!`);
//   };
//
//   return sayHello;
// };
//
// const greet = greeter('Step Jun');
// greet();


// const greeter = (target) => {
//   return () => {
//     console.log(`Hi, ${target}!`);
//   };
// };
//
// const greet = greeter('Step Jun');
// greet();


const greeter = (target) => () => console.log(`Hi, ${target}!`);

const greet = greeter('Step Jun');
greet();
