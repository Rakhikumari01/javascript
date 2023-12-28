//Values are stored in stack
const name ='John';
const age =30;

//Reference values are stored on the heap

const person ={
    name:'Brad',
   age:40
}

let newName= name;
newName ='Johnathan';

let newPerson = person;
newPerson.name = 'Bradely';

console.log(name, newName);
console.log(person,newPerson);

//Type conversion

//chnge string to number
let amount = 'hello';

amount = parseInt(amount);
//amount =+amount;
//amount =Number(amount);

//change number to string
//amount= amount.toString();
//amount =String(amount);

//change string to decimal
//amount = parseFloat(amount);

//convert number to boolean
//amount = Boolean(amount);

console.log(amount, typeof amount);

