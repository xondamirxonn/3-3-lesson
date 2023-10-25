// let str = "Lorem ipsum dolor sit ipsum amet. +9989898320";

// console.log(str.length)
// console.log(str.charAt(3));
// console.log(str.charCodeAt(22));
// console.log(str.concat(" Eshmat" , " Toshmat"));
// console.log(str.endsWith("0"));
// console.log(str.includes("j"));
// console.log(str.indexOf("L"));
// console.log(str.lastIndexOf("a"));
// console.log(str.padEnd(10, "0"));
// console.log(str.padStart(10, "0"));
// console.log(str.repeat(3));
// console.log(str.replace(" ", " "));
// console.log(str.replaceAll(" ", ","));
// console.log(str.search("/\+998*9*/")); string va regax
// console.log(str.slice("12"));
// console.log(str.split(" "));
// console.log(str.startsWith("lorem"));
// console.log(str.toLocaleLowerCase());
// console.log(str.toLocaleUpperCase());
// console.log(str.trim());
// console.log(str.trimStart());
// console.log(str.trimEnd());
// let fruits = ["Apple", "Lime", "Banana", "Cherry", "Strawberry", "Water melon"];

// console.log(fruits.length);
// console.log(
//   fruits.concat(["Pear", "Lime"], ["Strawberry", "Water melon", ["Pineapple"]])
// );
// console.log(fruits.flat(2));
// console.log(fruits.includes("apple"));
// console.log(fruits.indexOf("Apple"));
// console.log(fruits.lastIndexOf("Apple"));
// console.log(fruits.lastIndexOf("Apple"));
// console.log(fruits.join("->"));
// console.log(fruits.reverse());
// console.log("fruits".split("").reverse()).join("");
// console.log(fruits.slice(1, 3));
// console.log(fruits.sort());
// console.log(fruits.sort().reverse());
// fruits.push("Strawberry");
// fruits.unshift("Strawberry");
// fruits.pop();
// fruits.shift();
// fruits.splice(2, 0, "Pear", "Pineapple");
// fruits.splice(fruits.length, 0, "Pear"); // push
// fruits.splice(0, 0, "Pear"); // unshift
// fruits.splice(fruits.length - 1, 1); // pop

// console.log(fruits);




// let hozir = Date.now();
// let ertaga = new Date("2023-10-25T06:00:00");
// let day = new Date(2007, 7, 14).getTime()
// console.log(hozir - day)
// console.log(ertaga)
// console.log(hozir.getDate());
// console.log(hozir.getFullYear());
// console.log(hozir.getDay());
// console.log(hozir.getHours());
// console.log(hozir.getMinutes());
// console.log(hozir.getMilliseconds());
// console.log(hozir.getMonth());
// console.log(hozir.getSeconds());
// console.log(hozir.getTime());
// console.log(hozir.getTimezoneOffset());
// console.log(hozir.getUTCHours());

// 1-vazifa @xondamirxonn

let name = prompt("Ismingizni kiriting: ");
let year = prompt("Tug'ilgan yilingizni kiriting: ");
let month = prompt("Tug'ilgan oyingizni kiriting: ");
let birthday = prompt("Tug'ilgan kuningizni kiriting: ");

let now = Date.now();
let date = new Date(year, month - 1, birthday).getTime();

let yil = parseInt((now - date) / 1000 / 60 / 60 / 24 / 365.25);
let oy = parseInt((((now - date) / 1000 / 60 / 60 / 24) % 365.2) / 31);
let kun = parseInt((((now - date) / 1000 / 60 / 60 / 24) % 365.15) % 31);

alert(
  "Hurmatli " +
    name +
    ", siz " +
    yil +
    " yil, " +
    oy +
    " oy, " +
    kun +
    " kun" +
    " umr kechiribsiz"
);

// 2-vazifa @xondamirxonn

let car = ["Lamborghini", "Bugatti", "Ferarri", "Tesla", "Onix"];


let word = prompt("Qanday moshina qo'shmoqchisiz? ");

car.push(word);
car.shift();

car.slice(1, 0);
console.log(car)