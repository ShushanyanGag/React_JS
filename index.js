"use strict";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// var a = 5;
// let b = 10;
// const c = 15;

// a = 20;
// b = 30;
// c = 40;

// console.log("a =", a);
// console.log("b =", b);
// console.log("c =", c);

// string
// number
// bigint
// boolean
// undefined
// null
// symbol
// object

// let let = 5;
// let var = 5;
// const if = 5;

// let name = "Arsen";
// name = "Artak";
// console.log(name);

// let str = "123";
// let num = 123;
// let bool = true;

// console.log("str = ", typeof str);
// console.log("num = ", typeof num);
// console.log("bool = ", Number(bool));

// let a = 5 * 5;

// console.log(a);
// console.log("infinity", Infinity)

// const bigNumber = 5654781867456145684756164669464669758692469n;

// console.log(bigNumber);

// let str = "just a string";

// console.log(str);

// let otherStr = `other string ${str}`;

// console.log(otherStr);

// const Null = null;

// console.log("null = ", typeof Null);

// let person = {
//   name: "Arsen",
//   age: 25,
//   isMarried: true,
//   eyes: "blue",
// };

// let person1 = person;
// person1.name = "Valod";
// console.log("person1 = ", person1.name);
// console.log("person = ", person.name);

// let num = 15;
// let num1 = num;
// num1 = 30;

// console.log("num1 = ", num1);
// // person.name = "Artak";

// if (name === "Karen") {
//   alert(`Yes his name is ${name}`);
// }

// if (1) {
//   alert("This code will execute always");
// }

// if(0) {
//   alert("This code will never execute")
// }

// const name = prompt("What is his name ?");
// if (name === "Karen") {
//   alert(`Yes, his name is ${name}`);
// } else {
//   alert("No, not right");
// }

// const year = prompt("When did WW2 happened ?");
// console.log(+year);
// if (year < 1939) {
//   alert("is not right");
// } else if (year > 1939) {
//   alert("is not right");
// } else {
//   alert("You are right");
// }

// const result = year === 1939 ? "You are right" : "You are not right";

// alert(result);

// console.log(true || false);
// console.log(true || true);
// console.log(false || false);

// if (true || false) {
//   console.log("Right!");
// }

// if (+year < 1939 || +year > 1939) {
//   alert("You are not right!");
// } else {
//   alert("You are right!");
// }

// console.log(null || 0 || undefined || NaN || "" || 1 || true);

// const firstName = null;
// const lastName = "Aren";

// const name = firstName || lastName || "Karen";

// console.log(name);

// var year = prompt("When did WW2 happened ?");

// switch (year) {
//   case "1938":
//     alert("This is earlier");
//     break;
//   case "1939":
//     alert("You are right!");
//     break;
//   case "1940":
//     alert("This is too late");
//     break;
//   default:
//     alert("You are totally wrong!");
// }

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

// for (let i = 0; i <= 5; i++) {
//   console.log(i);
//   if (true) {
//     let a = 10;
//   }
// }

//let sum = 0;

// for (let i = 0; i < 5; i++) {
//   console.log(sum);
//   if (i === 4) break;
//   sum = sum + 1;
// }

// for (let i = 0; i <= 5; i++) {
//   if (i % 2 === 0) continue;
//   console.log(i);
//   sum = sum + i;
// }

// let i = 5;

// while (i < 5) {
//   console.log(i);
//   i--;
// }

// let i = 0;

// do {
//   console.log(i);
//   i++;
// } while (i < 5);

// const kam = null || 0 || undefined || NaN || "" || 1 || true;
// const yev = null && 0 && undefined && NaN && "" && 1 && true;

// console.log("kam", kam);
// console.log("yev", yev);

// const a = true;
// const b = true;
// const c = false;

// if (a || c || b) {
//   console.log("kam");
// }

// const a = 5;
// const b = 10;
// const c = 10;
// const d = 20;

// if (a === b && b === c) {
//   console.log("kam");
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// --------------------------------------------------------function declaration----------------------------------------------------- //

// let str = "Hello another world"

// function greet() {
//   let str = "Hello world!";
//   console.log(str);
// }

// greet();

// const seven = 7;

// function squaring() {
//   console.log(seven);
//   return seven * seven;
// }

// squaring();

// let count = 0;

// function incrase() {
//   count = count = ++count;
// }

// incrase();
// console.log(count);

// incrase();
// console.log(count);

// let country = "Armenia";

// function print_country_name() {
//   let country = "Russia";
//   console.log(country);
// }

// print_country_name();

// function multiply(x, y, z) {
//   x = 10;
//   console.log(x);
//   return (x * y * z) / 2;
// }

// let x = 2;
// let y = 3;
// let z = 2;

// const six = multiply(x, y, z);
// console.log(six);
// console.log(x);

// function divide(x, y = 2) {
//   console.log(y);
//   return x * y;
// }

// console.log(divide(4, 4));

// ------------------------------------------------function expression-------------------------------------------------------- //

// greet1();

// const greet = function () {
//   console.log("Hello world!");
// };

// function greet1() {
//   console.log("Hello Armenia");
// }

// greet();

// ----------------------------------------------------arrow function---------------------------------------------------------------//

// const greet = () => {
//   console.log("Hello world!");
// };

// greet();

// const sum = (x, y) => {
//   return x * y;
// };

// console.log(sum(2, 3));

// const keywords = {
//   0: "number",
//   width: 500,
// };

// console.log(keywords["0"]);

// let a = { x: 1 };
// let b = a;
// b.x = 2;
// console.log(a === b);

// const user = {
//   name: "Aren",
//   age: 30,
// };

// let user2 = {};

// for (let key in user) {
//   user2[key] = user[key];
// }

// user2.name = "Taron";
// console.log(user2);
// console.log(user);
// console.log(user === user2);

// const user = {
//   name: "Aren",
//   age: 30,
//   country: "Armenia",
// };
// const city = { city: "Vanadzor" };

// const obj3 = { x: 5 };

// // const newObject = Object.assign({}, user, city);
// const newObject = Object.assign({}, user);

// // newObject.x = 10;
// user.age = 40;

// console.log(newObject);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const user = new Object({
//   name: "Aren",
//   age: 30,
//   country: "Armenia",
//   children: {
//     soon: "Arman",
//   },
// });

// const newObject = Object.assign({}, user);

// user.age = 40;
// user.children.soon = "Taron";

// console.log(newObject);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//------------------------------xndir 1---------------------------------//

// function fizzBuzz(diapazon, num1, num2) {
//   for (let i = 0; i < diapazon; i++) {
//     if (i % num1 === 0 && i % num2 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % num2 === 0) {
//       console.log("Buzz");
//     } else if (i % num1 === 0) {
//       console.log("Fizz");
//     } else {
//       console.log(i);
//     }
//   }
// }

// fizzBuzz(100, 3, 5);

// --------------------------xndir 2---------------------------//

// let person = {
//   firstName: "Aren",
//   lastName: "Arenyan",
// };

// function double(person) {
//   for (let key in person) {
//     return person[key] + person[key];
//   }
// }

// double(person);

// console.log(person[key]);

// error

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let menu = {
//   line1: 1,
//   line2: 2,
//   line3: 3,
//   line4: 4,
//   line5: 5,
//   line6: 6,
//   line7: 7,
//   line8: 8,
//   line9: 9,
//   line10: 10,
// };

///////////////////////////////////////////////////////////////////////////
//<---------------------------Tarberak 1-------------------------------->//
///////////////////////////////////////////////////////////////////////////
///                                                                     ///
///  function amount(obj){                                              ///
///      var i = 0;                                                     ///
///      for (let key in obj){                                          ///
///      i++;                                                           ///
///    }                                                                ///
///    return i;                                                        ///
///  }                                                                  ///
///                                                                     ///
///  let length = amount(menu);                                         ///
///                                                                     ///
///  console.log(menu);                                                 ///
///  console.log(`Տվյալների քանակը - ${length}`);                       ///
///                                                                     ///
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///                                                                     ///
///---------------------------------------------------------------------///
///                                                                     ///
///////////////////////////////////////////////////////////////////////////
///<--------------------------Tarberak 2------------------------------->///
///////////////////////////////////////////////////////////////////////////
///                                                                     ///
/// var length = Object.keys(menu).length;                              ///
///                                                                     ///
/// console.log(menu);                                                  ///
/// console.log(`Տվյալների քանակը - ${length}`);                        ///
///                                                                     ///
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////

// const array = new Array();
// const array = [];

// const cities = ["Vanadzor", "Yerevan", "Goris"];

// console.log(cities.length);

// cities[3] = "Gyumri";

// console.log(cities);

// console.log(cities);

// cities.push("Gyumri");
// console.log(cities);

// cities.pop("");
// console.log(cities);

// cities.unshift("Alaverdi");
// console.log(cities);

// cities.shift();
// console.log(cities);

// const reversed_cities = [];

// for (let i = cities.length - 1; i >= 0; i--) {
//   reversed_cities.push(cities[i]);
// }

// console.log(reversed_cities);

// console.log(cities.reverse());

// const numbers = [1, 2, 3];

// const squares = numbers.map((item, index, array) => {
//   console.log("item", item);
//   console.log("index", index);
//   console.log("array", array);
// });
// console.log(squares);

////////////////////////////////////////////////////////////
//-----------------------Xndir----------------------------//

// const numbers = [1, 10, 3, 15, 30, 8, 66];

// const maxNumber = (array) => {
//   let max = 0;
//   for (let i = 0; i <= array.length; i++) {
//     if (array[i] > max) {
//       max = array[i];
//     }
//   }
//   console.log(max);
//   return max;
// };

// maxNumber(numbers);

/////////////////////////////////////////////////////////////

// const numbers = [1, 10, 3, 15, 30, 8, 66];

// const minNumbers = (array) => {
//   let min1 = 999;
//   let min2 = 999;
//   for (let i = 0; i <= array.length; i++) {
//     if (array[i] <= min1) {
//       min1 = array[i];
//     }
//   }
//   for (let i = 0; i <= array.length; i++) {
//     if (array[i] <= min2) {
//       min2 = array[i];
//     }
//   }

//   console.log(min1);
//   console.log(min2);
// };
// minNumbers(numbers);

///////////////////////////////////////////////////////////////////////////
//<------------------------------Xndir 3-------------------------------->//
///////////////////////////////////////////////////////////////////////////

// let array = [2, 4, 6, 4, 1, 9, 6, 8, 1];

// let newArray = [];

// const length = array.length;

// function repeatedNumbers(array) {
//     for (let i = 0; i < length; i++) {
//         for (let j = i + 1; j < length; j++) {
//             if (array[i] === array[j]) {
//                 newArray[index] = array[i];
//                 index++;
//             }
//         }
//     }
// }

// repeatedNumbers(array);

// console.log(newArray);

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

//-----------------------------------------------------------------------//

///////////////////////////////////////////////////////////////////////////
//<------------------------------Xndir 4-------------------------------->//
///////////////////////////////////////////////////////////////////////////

// let array = [-1, 2, 3, -4, 5, 6, -7, 8];

// function removeNegativeNumbers(array){
//    for (let i = array.length; i >= 0; i--) {
//      if (array[i] < 0) {
//       array[i] = array[array.length - 1];
//       array.pop();
//     }
//   }
//   return array;
// }

// removeNegativeNumbers(array);
// console.log(removeNegativeNumbers(array));

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

//-----------------------------------------------------------------------//

// const obj = {
//   a: "a",
//   b: "b",
//   c: "c",
// };

// console.log(obj);
// delete obj.b;
// console.log(obj);

// const arr = ["I", "am", "working"];

// console.log(arr);
//-----------------------------------Splice-----------------------------//

// delete arr[1];
// console.log(arr[1]);

// arr.splice(1, 1);
// console.log(arr);

// const deleted = arr.splice(1, 1, "really", "really");
// console.log(deleted);

// const deleted = arr.splice(-1, 1, "really", "really");
// console.log(deleted);

//---------------------------------------Slice-------------------------//

// console.log(arr.slice(2, 3));

// console.log(arr.slice(-2, -1));

//--------------------------------------Concat-------------------------//

// const arr = [1, 2];
// const arr2 = [3, 4];
// const arr3 = [5, 6];

// console.log(arr.concat(arr3, arr2));

//-----------------------------------Foreach-------------------------------//

// arr.forEach(function (item, index, arr) {
//   console.log(item);
//   console.log(index);
//   console.log(arr);
// });

//----------------------------indexOf, includes------------------------------------//

// console.log(arr.indexOf("am"));
// console.log(arr.indexOf("amb"));
// console.log(arr.indexOf("ambd"));

// console.log(arr.includes("amb"));
// console.log(arr.includes("am"));

//--------------------------------findIndex----------------------------------//

// let car = [
//   { id: 1, mark: "BMW" },
//   { id: 2, mark: "MERCEDES" },
//   { id: 1, mark: "LADA" },
// ];

// const index = car.findIndex((car, index, arr) => car.id === 2);

// console.log(index);

// let cars = [
//   { id: 1, mark: "BMW", motor: 5.5 },
//   { id: 2, mark: "Mercedes", motor: 6 },
//   { id: 3, mark: "Lada", motor: 1.5 },
//   { id: 3, mark: "Niva", motor: 2.5 },
//   { id: 3, mark: "Opel", motor: 3.5 },
// ];

// const filteredArr = cars.filter((car) => car.motor >= 3.5);

// console.log(filteredArr);

//-----------------------------------sort-----------------------------------------//

// let arr = [5, 4, 8, 22, 55, 1, 6, 9];
// console.log(arr.sort());

// const numberequals = (a, b) => {
//   if (a > b) return 1;
//   if (a == b) return 0;
//   if (a < b) return -1;
// };

// console.log(arr.sort(numberequals));

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
//-------------------------------------------------------------------------------//

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let max = 0;
// let min = 0;

// function theBiggestAndSmallestNumber(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= max) {
//       max = arr[i];
//     }
//   }

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] <= min) {
//       min = arr[i];
//     }
//   }
//   return max && min;
// }

// theBiggestAndSmallestNumber(arr);

// //let min = Math.min(arr);
// //let max = Math.max(arr);

// let sum = 0;

// function sumBetweenBiggestAndSmallest(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > min && arr[i] < max) {
//       sum += arr[i];
//     }
//   }
//   return sum;
// }

// sumBetweenBiggestAndSmallest(arr);

// console.log("Ամենամեծ թիվը", max, "է, իսկ նրա ինդեքսը՝", arr.indexOf(max));
// console.log("Միջակայքի էլեմենտների գումարը հավասար է", sum, "-ի");

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

//-----------------------------split/join----------------------------------//

// let names = "Armen, Artur, Artak";
// let arr = names.split(", ");
// let names = "Armen, Artur, Artak, Samo";
// let arr = names.split(", ", 2);
// let arr = ["Armen", "Artak", "Samo"];

// console.log(arr.join(" - "));

//---------------------------------reduce---------------------------------//

// let arr = [1, 2, 3, 4, 5];

// const result = arr.reduce((acc, item, index, array) => acc + item, 0);

// console.log(result);
//

//
//---------------------------------Array .isArray---------------------------------//

// let arr = [];

// console.log(typeof arr);
// console.log(Array.isArray([]));
//
//
//-------------------------------------Some---------------------------------------//

// let arr = [1, 2, 3, 4, 5];

// let result = arr.some((item) => item === 2);

// console.log(result);

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

// const student = {
//   first_name: "Hayk",
//   last_name: "Harutyunyan",
//   age: 21,
//   say_name() {
//     console.log(this.first_name);
//   },
//   say_lastname: () => console.log(this.last_name),
// };

// student.say_name();
// const say_name = student.say_name;
// say_name();

// student.study = function () {
//   console.log("Es sovorum em VTC");
// };

// student.study();
// console.log(student);

// function say_name() {
//   console.log(`Im anuny ${this.first_name} e`);
// }

// student.say_name = say_name;
// student.say_name();
// student.say_lastname();

//-----------------------------------Destruction-------------------------------------//

// const numbers = [0, 1, 2, 3, 4, 5];

// const [zero, one, ...tail] = numbers;

// console.log(zero);
// console.log(one);
// console.log(tail);

///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

/// --------------------------------------------------------------------- ///
/// --------------------------------------------------------------------- ///

/////////////////////////////////////////////////////////////////////////////
/// -----------------------------xndir 1--------------------------------- ///
/////////////////////////////////////////////////////////////////////////////

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let n = prompt('Input the n number');
// let array
// function lastElements(arr, n){
//     if (n<=0) {
//         return [];
//     }
//     if (n>= arr.length) {
//         return arr.slice();
//     }

//     return arr.slice(-n);
// }

// const last_n_elements = lastElements(arr, n);

// console.log(last_n_elements);

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

/// --------------------------------------------------------------------- ///
/// --------------------------------------------------------------------- ///
/// --------------------------------------------------------------------- ///

/////////////////////////////////////////////////////////////////////////////
/// -----------------------------xndir 2--------------------------------- ///
/////////////////////////////////////////////////////////////////////////////

// let arr = [1, 4, 2, 5, 2, 9, 1, 5, 2, 7, 6, 2, 3, 5, 2, 5, 9, 4, 5, 2];

// function mostRepeatElement(arr) {
//     let repeat = {};
//     for (let key of arr) {
//         if(repeat[key]){
//             repeat[key] ++;
//         } else {
//             repeat[key] = 1;
//         }
//     }

//     let mostRepeatedElement = arr[0];
//     let highestRepeat = 1;

//     for (let key in repeat){
//         if (repeat[key] > highestRepeat) {
//             mostRepeatedElement = key;
//             highestRepeat = repeat[key];
//         }
//     }
//     return {key: mostRepeatedElement, repeat: highestRepeat} ;
// }

// const mostRepeat = mostRepeatElement(arr);

// console.log(`The most repeated number is ${mostRepeat.key}`);
// console.log(`It repeats ${mostRepeat.repeat} times`);

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

/// --------------------------------------------------------------------- ///

/// --------------------------------This-------------------------------- ///

// let obj = {
//   a: 200,
//   b: 100,
// };

// let func = function (c) {
//     return this.a + this.b + c;
// };

// let result = func.call(obj, 300);

// console.log(result);

// let obj = {
//     a: 200,
//     b: 100,
// };

// let func = function (c, d) {
//     return this.a + this.b + c + d;
// };

// let result = func.apply(obj, [300, 400]);

// console.log(result);

// let obj = {
//   a: 200,
//   b: 100,
// };

// let func = function (c, d) {
//   return this.a + this.b + c;
// };

// let newFunc = func.bind(obj, [300]);

// console.log(newFunc());

/// -----------------------------map/set------------------------------------ ///

// let map = new Map([["age", 25]]);

// map.set("1", "str");
// map.set(1, "num1");
// map.set(true, "bool1");

// let Arman = { name: "Arman" };
// map.set(Arman, "65564");

// for (let key of map) {
//   console.log(key);
// }

// console.log(map.get(Arman));
// console.log(map.size);

// let set = new Set();

// let arman = { name: "Arman" };
// let artak = { name: "Artak" };
// let hayk = { name: "Hayk" };

// set.add(arman);
// set.add(artak);
// set.add(hayk);
// set.add(arman);
// set.add(artak);

// for (let user of set) {
//   console.log(user.name);
// }

// set.add(NaN);
// set.add(NaN);
// console.log(["artak", "artak", "artak"]);

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

/// --------------------------------------------------------------------- ///

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

//let arr1 = [3, 8, 6, 5, 4, 2];
// let arr2 = [2, 5, 4, 8, 6, 3];

// function compareArrays(arr1, arr2) {

//     if (arr1.length != arr2.length) {
//         console.log(false);
//     }

//     arr1.sort();
//     arr2.sort();

//     for (let i = 0; i < arr1.length; i++) {
//         if(arr1[i] !== arr2[i]) {
//             console.log(false);
//         } else {
//             console.log(true);
//         }
//     }
// }

// compareArrays(arr1, arr2);

/////////////////////////////////////////////////////////////////////////////

// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   sayHi() {
//     console.log(`Hi ${this.name}`);
//   }
// }

// class Cat extends Animal {}

// let cat = new Cat("Pupsiki!", 5);
// cat.sayHi();
// console.log(cat);

// function Animal(name) {
//   return {
//     name: name,
//   };
// }

// const cat = Animal("Murziki");
// console.log(cat);

// <-----------------------------JSON-----------------------------------> //

// let object = {
//   a: "a",
//   b: "b",
// };

// localStorage.setItem("name", "Arman");
// localStorage.setItem("age", "15");

// console.log(object);
// console.log(JSON.stringify(object));

// sessionStorage

// const StringObject = localStorage.getItem("object");
// const realObject = JSON.parse(StringObject);

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

// setTimeout(() => {
//   console.log("usynchron");
// }, 0);

// const interval = setInterval(() => {
//   console.log(setInterval);
// }, 1000);

// setTimeout(() => {
//   clearInterval(interval);
// }, 4000);

// console.log("synchrone");

// const promise = new Promise((resolve, reject) => {
//   const serverData = {
//     status: "ok",
//     data: { name: "name" },
//   };
//   setTimeout(() => {
//   resolve(serverData);

//   },2000);
// .then((data) => {
//     console.log("data", data);
//     data.data.name = "Artak";
//     return data;
// },3000);
// .then((modifiedData) => {
//     console.log(modifiedData, "modifiedData");
//     console.log("Wait");
// })
// })
// // console.log(promise);

// const password = true;
// const promise = new promise((resolve, reject) => {
//   const serverData = {
//     status: "ok",
//     data: { name: "Armen" },
//   };
//   setTimeout(() => {
//     if (password) {
//       resolve(serverData);
//     } else reject("Password is wrong");
//   }, 2000);
// }).then(
//   (data) => {
//     console.log("data", data);
//   },
//   (error) => {
//     console.error("Error: ", error);
//   }
// );

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

// function num(a) {
//   try {
//     if (a < 10) {
//       console.log("OK");
//     } else {
//       throw "This is wrong";
//     }
//   } catch (error) {
//     console.error("Error: " + error);
//   } finally {
//     console.log("finally");
//   }
// }

// num(5);

// let a = 500;
// window.a = a;

// document.body.style.background = "red";

// setTimeout(() => (document.body.style.background = "blue"), 6000);

// const html = document.documentElement;
// const body = document.body;

// console.log(body.parentNode);

// console.log(Array.from(body.childNodes));

// for (let node in html.childNodes) {
//   console.log(node);
// }

// console.log(html);
// console.log(html.firstChild);
// console.log(html.lastChild);
// console.log(html.childNodes);

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

// ----------------------------------------------------------------------- //

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

// const date = new Date();
// console.log(date, "date");

// console.log(document.body.children);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastElementChild);
// console.log(document.body.previousElementSibling);
// console.log(document.body.nextElementSibling);
// console.log(document.body.nextElementSibling);
// console.log(document.body.parentElement);

//  let header = 5;

// const h1 = document.getElementById("header");

// console.log(h1);

// const h1 = document.querySelectorAll(".header");

// console.log(h1);

// const elem = document.getElementsByTagName("h1");
// console.log(elem);

// let div = document.createElement("div");

// div.className = "div";
// div.innerHTML = "Hello, I have created an element!";

// document.body.append(div);
// document.body.prepend(div);

// let h1 = document.getElementById("header1");
// let h2 = document.getElementById("header2");

// document.body.replaceWith(h2, h1);

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

// ----------------------------------------------------------------------- //

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

// function foo() {
//   return { bar: hello };
// }

// const button = document.getElementById("button");
// button.onclick = function () {
//   alert("hello");
// };

// button.onclick = sayHi;

// button.onclick = function () {
//   alert("Hajox Valodik!");
// };
// function sayHi() {
//   alert("Yurik dzyaaa");
// }

// function sayHi2() {
//   alert("Yurik dzyaaa 2");
// }

// button.addEventListener("click", function (sayHi) {
//   alert("Hajox Valodik");
// });

// setTimeout(() => {
//   button.removeEventListener("click", sayHi);
// }, 4000);

// button.addEventListener("click", function (event) {
//   console.log("event", event);
// });

// class Info {
//   handleEvent(event) {
//     switch (event.type) {
//       case "mousedown":
//         button.innerHTML = "button is down!";
//         break;
//       case "mouseup":
//         button.innerHTML = "button is up!";
//         break;
//     }
//   }
// }

// const info = new Info();

// button.addEventListener("mousedown", info);
// button.addEventListener("mouseup", info);

// form.addEventListener("click", (e) => {
//   alert("form");
//   e.stopPropagation();
// });
// div.addEventListener("click", (e) => {
//   alert("div");
//   e.stopPropagation();
// });
// p.addEventListener("click", (e) => {
//   alert("p");
//   e.stopPropagation();
// });

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

// ----------------------------------------------------------------------- //

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
