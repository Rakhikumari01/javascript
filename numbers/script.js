let x;
const num = 5.4527;

x=num.toString();
x=num.toString().length;
x = num.toFixed(3);
x=num.toPrecision(2);


x=num.toLocaleString();

x=Math.ceil(4.2);
x=Math.floor(4.2);

x=Math.random();

x=Math.floor(Math.random()*10+1);
//console.log(x);

//Date and time

let d;
d = new Date();

d = d.toString();
d=  new Date(2021,6,10,12,30,0);

d = new Date('2021-01-10T12:30:00');

//timelapse
d = Date.now();
d = new Date('07-10-2022 12:30:0');
d =d.getTime();
d =d.valueOf();

console.log(d);

