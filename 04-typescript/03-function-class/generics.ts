const toArray = <T>(arg1: T, arg2: T): T[] => [arg1, arg2];
console.log(toArray(3, 8));
console.log(toArray('aaa', 'zzz'));
// console.log(toArray(1, '1'));

const toArrayVariably = <T>(...args: T[]): T[] => [...args];
console.log(toArrayVariably(1, 2, 3, 4, 5));
console.log(toArrayVariably('a', 'b', 'c'));
// console.log(toArrayVariably('a', 0, 'z'));

const multipleArray = <T, U, K>(arg1: T, arg2: U, arg3: K): [T, U, K] => [arg1, arg2, arg3];
console.log(multipleArray(3, 'hoge', true));
