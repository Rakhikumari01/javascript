const name = 'Rakhi';
const age =20;

x ='heloo my name is ' + name + ' and I am '+ age + ' years old';


//template literal
x = 'Heloo, my name is ${name} and I am ${age} years old';

//strings propertis and methods
const s ='heloo world'

x=s.length;
//access value by key
x=s[0];
x=s.__proto__;

x= s.toUpperCase();
x=s.toLowerCase();

x = s.indexOf('e')
x= s.substring(0,4);
x= s.slice(0,5);
x ='             Hello World';
x=x.trim();
x=s.includes('Hello');

x =s.valueOf();
x= s.split('');

console.log(x);

//challenge
const y = 'developer';
z = y.charAt(0).toUpperCase();
z =z +y.substring(1);

console.log(z);