
console.log("Hello World");

console.log("Hello "+"Singh");

console.log(undefined === null);

const x="5"

var hello=5;
hello=10;
let name="Lovepreet"
name1="Singh"

console.log("Value of name is ",name + name1);

// Function in javascript
function addnumber(m,n)
{
  return m+n;
}
console.log("Calling addnumber Function ==>", addnumber(12,4));

// Anynomus Function
const lastn=function lastname(m){
  return m;
}

const firstname="Lovepreet"
console.log("My fullname is ", firstname,lastn("Singh"));

// Arrow Function

//var Arrowfunction=(n)=>  n;

//console.log("My firstname is "+firstname+" and my Lastname is "+Arrowfunction("Singh"));

var Arrowfunction=(n)=>
{
  return n
}




console.log("Lastname"+Arrowfunction(" Singh"));



console.log(false==2);



console.log(undefined==false);
console.log(null===false);

let count=1;
count++
console.log(count);

const say=console.log("Say");







function externalfunction(fn)
{
  return fn(2,3)
}
