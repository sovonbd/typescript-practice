// const multiply = (a: number, b: number) => {
//   return a * b;
// };

import { IsPlayer } from "./interface/IsPlayer.js";
import { Player } from "./player.js";

// console.log(multiply(3, 4));

// array

// let fruits = ["apple", "banana", "orange", 3, true, {}];

// fruits.push({});

// object

// let person = {
//   name: "sovon",
//   age: 35,
//   isCaptain: true,
// };

// person.country = "Bangladesh";

// let a: string;

// normal variable

// let b: string | number;

// array

// let a: (string | number | boolean)[] = [];

// a.push(true);

// object
// let c: {
//   name: string;
//   age: number;
//   adult: boolean;
// };

// c = {
//   name: "sovon",
//   age: 45,
//   adult: true,
// };

// any type

// let a: any;
// a = 5;
// a = "sovon";

// function

// const myFunc = (a: number, b: string, c: string = "a"): string => {
//   return a + b;
// };

// myFunc(1, "b0");

// aliases

// type stringOrnum = string | number;
// type userType = { name: string; age: number };

// const userDetails = (id: stringOrnum, user: userType) => {
//   console.log(`${id}, name ${user.name}, age ${user.age}`);
// };

// const sayHello = (user1: userType) => {
//   console.log(`Hello ${user1.name}, age ${user1.age}`);
// };

// function signature

// let myFunc: (x: number, y: number, z: string) => number;

// let myFunc = (a: number, b: number, c: string) => {
//   if (c === "add") {
//     return a + b;
//   } else {
//     return a - b;
//   }
// };

// console.log(myFunc(3, 4, "add"));

// class

// class Player {
//   name: string;
//   age: number;
//   country: string;

//   constructor(n: string, a: number, c: string) {
//     this.name = n;
//     this.age = a;
//     this.country = c;
//   }

//   play() {
//     console.log(`${this.name}, ${this.age}, ${this.country}`);
//   }
// }

// const sovon = new Player("sovon", 30, "Bangladesh");
// const tumpa = new Player("tumpa", 30, "Bangladesh");
// // console.log(sovon);

// const players: Player[] = [];

// players.push(sovon);
// players.push(tumpa);

// console.log(players);

// Access modifier

// const sovon = new Player("sovon", 30, "Bangladesh");
// const tumpa = new Player("tumpa", 30, "Bangladesh");
// // sovon.name = "izhaan";
// // console.log(sovon.name);
// console.log(sovon.age);
// console.log(sovon.country);

// const players: Player[] = [];

// players.push(sovon);
// players.push(tumpa);

// console.log(players);

// Interfaces

// interface RectangleOption {
//   width: number;
//   length: number;
// }

// const drawRectangle = (option: RectangleOption) => {
//   let width = option.width;
//   let length = option.length;
// };

// let shape = {
//   width: 45,
//   length: 45,
//   height: 45,
// };

// drawRectangle(shape);

// const sovon: IsPlayer = new Player("sovon", 30, "Bangladesh");
// console.log(sovon.getAge());

// Generic

const addID = <
  T extends {
    name: string;
    age: number;
  }
>(
  obj: T
) => {
  let id = Math.floor(Math.random() * 100);
  return { ...obj, id };
};

let user = addID({
  name: "sovon",
  age: 30,
  country: "Bangladesh",
});

// user.age;

// let user = "T";

addID(user);
