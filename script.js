// let gameNum=25;
// let userNum=prompt("Guess the game number");
// console.log(userNum);
// while(userNum!=gameNum){
//   userNum=prompt("You entered the wrong number.Guess again ");
// }
// console.log("Conratulation ,you entered the right number")

// Strings
let fullName = prompt("enter your fullname without spaces");
let userName= "@"+fullName + fullName.length;
console.log(userName);
         //Arrays
let marks = [67,87,99,43,32];
console.log(marks);
console.log(marks.length); // "property"" give value and "methods" do some work;
//loops over arrays
//for loop
let heroes = ["ironman", "thor","hulk","shaktiman","spiderman","antman"]
for(let i = 0; i<heroes.length; i++){
  console.log(heroes[i]);
}
// we use for-of loop for arrays access
for (let hero of heroes){
  console.log(hero);
}

let cities = ["Lahore","Karachi","Peshawar","Islamabad"];
for(let city of cities){
  console.log(city);
}
// Practise Question (To calculate average of marks);
let Marks = [98,87,76,65,54,43];
let sum = 0;
for (let val of Marks){
  sum+=val;

}
let avg=sum/marks.length;
console.log(`The average of marks i= ${avg}`);

