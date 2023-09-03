"use strict";
// const string1=`this is first string `;
// string1.charAt(2)
// console.log(string1);
// console.log(typeof string1);
// const string2=new String (`this is new string `);
// console.log(typeof string2);
// // "cat".charAt(2);
// console.log("cat".charAt(2));
// console.log("akram".charAt[2]); //undefined 
// console.log("akram"[2]);
// console.log("akram"[-2]);//undefined on minus 

// function areEqualCaseinsensitive(str1,str2){
//     return str1.toUpperCase()===str2.toUpperCase();}
    
// 
// const areEqualInUpperCase=(str1,str2) =>
//     str1.toUpperCase()===str2.toUpperCase();
//     const areEqualInLowerCase=(str1,str2)=>
//     str1.toLowerCase()===str2.toLowerCase();
// areEqualInUpperCase("b","s");
// areEqualInLowerCase("B","W")
// const areEqualInUpperCase=(str1,str2) =>
//     str1.toUpperCase()===str2.toUpperCase();
//     const areEqualInLowerCase=(str1,str2)=>
//     str1.toLowerCase()===str2.toLowerCase();
// console.log(areEqualInUpperCase("K","K"));
// console.log(areEqualInLowerCase("l","b"))  //The reason you're getting false for both function calls is that the letters being compared are indeed different, both in terms of case and their actual characters
// const s1="2+2";
// console.log(eval(s1));
// const s2=2+2;
// console.log(s2);
// const s3= new String("2+2")
// console.log(s3);
// const s4=String("2+2");
// console.log(s4);
// const str=`this is pakistan bro. string length is :`;
// console.log(`${str}${str.length}`);
// function getCharacterLength(str) {
//     // The string iterator that is used here iterates over characters,
//     // not mere code units
//     return [...str].length;
//   }
  
//   console.log(getCharacterLength("A\uD87E\uDC04Z")); // 3

//   function getCharacter(str){
//     return [...str].length;
//   }
//   console.log(getCharacter(""));
//   console.log(typeof getCharacter);
//   const x="gilgit baltistan";
//   const emptyY="";
//   console.log(`${x} is ${x.length} code unit length`);
//   console.log(`  ${emptyY}the empty string is of  ${emptyY.length} code unit length`);
//    const str="A\uD835\uDC68B\uD835\uDC69C\uD835\uDC6A";
//    for (const v of str) {
//     console.log(v);
//    }
// const str="i am ubitian"
// console.log(`the fifth character of ${str} is : ${str.at(5)}`);
// returnlast=(arr) =>{
// return arr.at(-2)
// }
// let invoiceref="myinvoice01";
// console.log(returnlast(invoiceref));
// let invoiceref2="myinvoice02"
// console.log(returnlast(invoiceref2));
// const str="every green bus drives fast";
// const lengthWay=str.charAt(str.length -6);
// // console.log(lengthWay);
// const sliceway=str.slice(-5,-1);
// // console.log(sliceway);
// const atway=str.at(-3);
// console.log(atway);
//   const anystring="brave new world";
//   console.log(`the character at index 0 is:'${anystring.charAt()}'`);
//   console.log(`the character at index 0 is:'${anystring.charAt(1)}'`);
// const p="this is pakistan ";
// console.log(p.replace("pakistan","karachi"));
// console.log(p.replace(p,"this is city of light")); ****** string part ended with practice,will explore more methods in future
// console.log(num);
// console.log(...num); not good 
// const num=[12,14,14.5,17,16,16];
// console.log(Math.min(Math.ceil(...num));
// console.log(Math.max(...num));
// console.log(Math.floor(12.44));
// getrandom=(num)=>{
//     console.log(`before ceil method number is :`,num);
//     return console.log(`after ceil method number is :`,Math.ceil( Math.random() +num ));
// }
// console.log(getrandom(5));
// getrandom=(num)=>{
//     const beforemessage=`before using ceil method num is ${num}`;
//     const aftermessage=`after using ceil method num is ${Math.floor(Math.random()*num)}`;
//     return[beforemessage,aftermessage]
// }
// const [before,after]=getrandom(5);
// console.log(before);
// console.log(after);
// function addtwo(a,b){
//     return Math.abs(a-b);
// }
// // console.log(addtwo(5,2));
// // console.log(Math.sqrt(4));
//  function square(a,b){
//     return Math.sqrt(a+b);
//  }
//  console.log(square(2,6));
//  console.log(Math.sqrt(8));
// objects *****************
// const obj1={
//     name:"akram",
//     email:"m@.com",
//     number: 232333,
// };
// const obj2={
//     name1:"akber",
//     email1:"mu@.com",
//     number1: 23322
// };
// const returntarget=Object.assign({},obj1,obj2);
// console.log(returntarget);
// console.log(obj1);
// for(const key in obj2){
//     obj1[key]=obj2[key];
// }
// console.log(obj1);
const o1 = { a: 1, b: 1, c: 1 };
const o2 = { d: 2, e: 2 };
const o3 = { f: 3 };

const obj = Object.assign({}, o1, o2, o3);
// console.log(obj); 
const obj1={
    name:"akram",
    website:"akram.com"
};
const obj2={
    surname:"ali",
    secondwebsite:"akram.pk",
};
// const mergedobj=Object.assign({},obj1,obj2);
// console.log(mergedobj);
// const finalobj=Object.assign(obj1,obj2);
// console.log(obj1);
// ****************************
// const newobj={
//     name:"akram",
//     city:"karachi",
//     address: function(){
// console.log(`my addres is ${this.distric}. am i a gilgiti?: ${this.isgilgiti}`);
//     }
// }
// const me=Object.create(newobj);
// me.distric="karachi east";
// me.isgilgiti=true;
// me.address();
// const ubit={
//     name:"akram",
//     seat_no:"eb21103066",
//     session: function(){
//         console.log(`my session is ${this.mysession}, \n am i a good student:yes/no :${this.isgood}, \n Am i a ubitian: yes/no : ${this.isubitian}`);
//     }
// };
// const my = Object.create(ubit);
// my.mysession="evening";
// my.isgood=true;
// my.isubitian="yes";
// my.session();
// console.log(ubit);
// console.log(askSession());

// const freezeObj={
//     name:"akram",
//     password:2334,
// };
// Object.freeze(freezeObj);
// // freezeObj.name="jawad";
// // console.log(freezeObj.name);
// console.log(Object.isFrozen(freezeObj));

const propertyObj={
    name:"akram",
    email:"muh@11.com"
}
propertyObj.address="karachi";
// propertyObj.hasOwnProperty("email");
// console.log(propertyObj.hasOwnProperty("email"));
const check=propertyObj.hasOwnProperty("town");
// console.log(check);
//console.log(Object.isFrozen(propertyObj));
// console.log(propertyObj.hasOwnProperty("country"));
// ******************array**********
const arrFruits=["apple","peach"];
// console.log(arrFruits);
// console.log(Object.keys(arrFruits));
arrFruits.push("banana","garma");
// console.log(arrFruits);
// arrFruits.pop[1]
// console.log(arrFruits.length);
// console.log(arrFruits.lastIndexOf(arrFruits));
// console.log(arrFruits.reverse());
// console.log(arrFruits.slice(1,3));
// console.log(arrFruits.splice(1,3));
const arr1=[1,2,3,4,5];
const arr2=[6,7,8,9];
const arr3=["apple","peach","orange","mango"]
const []=[];
// console.log([].concat(arr1,arr2,arr3));

//  const arr4=[1,2,4,6];
//  const map1=arr4.map((x)=>x+2);
// //  console.log(map1);
//   const arr10=[1,2,3,4,5,6,7,8];
//   for (const num of arr10) {
//     console.log(num);
    
//   }
//    const string01="hello world";
//    for (const string001 of string01) {
//     console.log(`the string is as follows: ${string001}`);
    
//    }
// map 
const map =new Map();
map.set("pak","pakistan");
map.set("khi","karachi");
// for (const maping of map) {
//     console.log(maping);}
    for (const [key,value] of map) {
        // console.log(key,"=>",value);
        
    }
    const objectChecks={
        name:"akram",
        seat: 66,
    }
    // for (const objChk of objectChecks) {
    //     console.log(objChk);
        
    // }
// for (const [key,value] of objectChecks) {
//     console.log(key,"=>",value);
    
// }
 
// const arr001=[2,3,4,5,6]
// for (const arrforof of arr001) {
//     console.log(arrforof);
    
// }
// const mycode=[{
//     mobileName: "realme",
//     mobilePrice:"50k"
// },
// {
//     mobileName:"infinix",
//     mobilePrice:"60k"
// }]
// mycode.forEach( (items)=>{
// console.log(items.mobilePrice);
// })
//  ***************callback function 
