// String
const firstname = 'sara';

//Number
const age =30;
const temp =89.9;

//boolean
const hasKids =true;
//null
const aptNumber =null;
//undefined
//let score;
const score=undefined;

//symbol
const id =Symbol('id');

//BigInt
const n = 900719925470991n;

//Reference Types
const numbers =[1,2,3,4];

const person={
    name:'Brad',
};

function sayHeloo() {
   console.log("Heloo");
}


const output = sayHeloo;
console.log(output, typeof output);
