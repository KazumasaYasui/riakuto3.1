let Tom: 'Cat' = 'Cat';
// Tom = 'Dog'; // 任意の文字列以外を許さない型なのでエラー
console.log(Tom);

let Mary: 'Cat' | 'Dog' | 'Rabbit' = 'Cat';
console.log(Mary);
Mary = 'Rabbit';
console.log(Mary);
// Mary = 'Parrot'; // 任意の文字列以外を許さない型なのでエラー
