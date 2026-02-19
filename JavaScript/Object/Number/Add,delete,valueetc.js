let Num = [1,3,4,5,6,7,8,7,8,7,8,9];

let Newnum = new Set(Num);
console.log(Newnum);

Newnum.delete(7);
console.log(Newnum);
Newnum.add(40);
console.log(Newnum);

console.log(Newnum.has(3));

console.log(Newnum.has(70));

console.log(Newnum.size);
 Newnum.clear();
 console.log(Newnum);