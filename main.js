"use strict";
/*interface mycar {           ///////interface same as type alaise but it use only object
   make:string
   model:number

}
const mycar: mycar = {
   make:"toyota",
   model:2023
}
console.log(mycar.make)
////type intersection       //////2 object ki type ko merge krne k lye type intersection use hota h
type teacher = {
   teachername:string
   exp:number
}
type student = {
   studentname:string
   rollno:number|string
}
const classroom: teacher & student = {
   teachername: "ali",
   exp: 4,
   rollno: 12345,
   studentname: "maira",
}
console.log(classroom.studentname);*/
///////////type union in array 
const fruits = [["mango", "peach"], ["watermelon", "banana"]];
console.log(fruits[2]);
/////// type union in array
/*const fruit: (number | string |boolean) [][]= [
     [3,4],["apple","bnanA"],[true,false]
]
/////loops
 for(let i = 0; i<=10; i++){
   console.log(i)
 }
 let b = 10       /////// practice
 while(b >= 1){
 console.log(b)
 b--
 /*  for(let i = 5; i > 0; i-- ){          ///////// ulta chalyga 5 se 1 tk output dyga
console.log(i)
  }
//////while loop
let a = 1
 while ( a <=10) {
    console.log(a);
    a++
}
let b = 10       /////// practice
while(b >= 1){
console.log(b)
b--
}*/
/*let persons = ["baber","shaheen","rizwan","imad"]
//console.log(persons.length);//
for(let i =0; i < persons.length; i++){
  console.log(persons[i])
}
//////for off loop
for(let player of persons){   ///////ek ek kr k value ayge ye b uper wale ki trha h
  console.log(player)
}
/////enums
enum direction {
  east,west,north,south
}
console.log(direction)*/
