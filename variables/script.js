//ways to declare a variable
//var, let,const

let firstName ="John";
let lastName ="singh";
console.log(firstName,lastName);

var age=30;
console.log(age);

//naming conventions
// -only letters,numbers,underscores and dollar signs
//cannot start with a number
//firstName,first_name,FirstName,

//re-assignig variables
age = 31;
console.log(age);

let score;
score =1;
console.log(score);

if(true){
    score =score+1;
}
console.log(score);

//const should be assigned value prehand and it cannot be assigned another value later
// const x =100;
// x=200;
// let score1;//with let it can be done

const arr = [1,2,3,4];
arr.push(5);
console.log(arr);

const person={
    name:'brad',
}

person.name='lily'
person.email ='brad56@gmail.com';
console.log(person);

//decalre mutliple values at once
let a,b,c;

const d=1,r=2,y=14;

