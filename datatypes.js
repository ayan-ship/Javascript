/* primitive 

7 types

strings
symbol
number
null
boolean
bigint
undefined

**these are called by their values**

*/

/* reference (non-primitive) 

arrays, objects, functions
these are passed by references

*/
let num=null
console.log(typeof num); //will give object as output bcz null gives typeof as object

let variable2=undefined
console.log(typeof variable2);//will give undefined as output

const myfunction=()=>{
    console.log("this is printed by arrow function called myfunction");
    
}


console.log(typeof myfunction); // will give function as an output but in it is "funtion object"

let arr =["hi" ,"this" ,"is", "an", "array"]

console.log(typeof arr);// this will give object as an output bcz all non primitive variable generally give object as an output

/* stack (primitive vs heap(non-primitive)*/