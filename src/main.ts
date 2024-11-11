function sum(num1:number, num2:number){
    return num1 + num2;
}
// i do not have to write the return type it does it manually
const sumNums = sum(4,5);
console.log(sumNums)

// but if i want to it

function multiply(num1:number, num2:number) : number{
    return num1 + num2;
}

const multiplyNums = multiply(7,3);


// function with an obj param

type Person = {
  name:string,
  age:number
}

const person1 : Person = {
  name:'Erkam',
  age:25
}

function printPerson(person : Person){
  console.log(person)
}

printPerson(person1);