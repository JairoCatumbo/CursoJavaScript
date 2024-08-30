var arr=[1,2,3,4,5];

console.log(arr.length);
//adicionar elementos no fim
arr.push(7);
console.log(arr);
//elimina no o lemento fim 
arr.pop();
console.log(arr);
//adionar no comeco

arr.unshift(0);
console.log(arr);
//remove no principio
arr.shift();
console.log(arr);

console.log(arr[arr.length-1]);

//verificar se eh um array

console.log(Array.isArray(arr));