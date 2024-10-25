// let gameNum=25;
// let userNum=prompt("Guess the game number");
// console.log(userNum);
// while(userNum!=gameNum){
//   userNum=prompt("You entered the wrong number.Guess again ");
// }
// console.log("Conratulation ,you entered the right number")

// // Strings
// let fullName = prompt("enter your fullname without spaces");
// let userName= "@"+fullName + fullName.length;
// console.log(userName);
//          //Arrays
// let marks = [67,87,99,43,32];
// console.log(marks);
// console.log(marks.length); // "property"" give value and "methods" do some work;
// //loops over arrays
// //for loop
// let heroes = ["ironman", "thor","hulk","shaktiman","spiderman","antman"]
// for(let i = 0; i<heroes.length; i++){
//   console.log(heroes[i]);
// }
// // we use for-of loop for arrays access
// for (let hero of heroes){
//   console.log(hero);
// }

// let cities = ["Lahore","Karachi","Peshawar","Islamabad"];
// for(let city of cities){
//   console.log(city);
// }
// // Practise Question 1 (To calculate average of marks);
// let Marks = [98,87,76,65,54,43];
// let sum = 0;
// for (let val of Marks){
//   sum+=val;

// }
// let avg=sum/marks.length;
// console.log(`The average of marks i= ${avg}`);
// //  Practise Question 2(offer 10%off and change the array to store final price after applying offer)
// //In this query we use "for loop" bcz it give direct value but we ask about index tracking so we use only"for loop";
// let items = [250,645,300,900,50];
// let i=0;
// for (let val of items){
//   let offer = val/10;
//   items[i]=items[i]-offer;
//   console.log(`value after offer = ${items[i]}`); 
// }

// Mehods on Arrays Push() = add to end any word;
// let Vagies = ["carrot","reddish","potato","tomato"];
// Vegies.push("peas","ladyfinger");
// console.log(Vegies);

//Pop()
// let Vegies = ["carrot","reddish","potato","tomato"];
// console.log(Vegies);
// let deletedVegies = Vegies.pop();
// console.log(Vegies);
// console.log(deletedVegies);

//to string
// let Vegies = ["carrot","reddish","potato","tomato"];
// console.log(Vegies);
// console.log(Vegies.toString());

//Concat string= join one array to another array;
// let marvelHeroes = ["Thor","spiderman","ironman"];
// let dcHeroes = ["superman","shaktiman"];
// let pakistaniHeroes = ["Quaid e Azam","Allama Iqbal"];
// let heroes = marvelHeroes .concat(dcHeroes,pakistaniHeroes);
// console.log(heroes);
 
//unshift 
// let marvelHeroes = ["Thor","spiderman","ironman"];
// marvelHeroes.unshift("Faiza Majid");

//shift = it return the delete value;
// let marvelHeroes = ["Thor","spiderman","ironman"];
// let values = marvelHeroes.shift();
// console.log("deleted",values);

//slice in  this end index is not included
// let marvelHeroes = ["Thor","spiderman","ironman","antman","shaktiman"];
// console.log(marvelHeroes);
// console.log(marvelHeroes.slice(0,2));

//splice  = (startdx,delcount,newEle) 
let arr = [54,67,89,98,65];
console.log(arr);
arr.splice(2,2,101,102);

// Practise Question

//deleted from start
let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// companies.shift();

// replace krna hai ola k sath;
companies.splice(2,1,"ola");

// at the end
companies.push("Amazon");
