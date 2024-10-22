let gameNum=25;
let userNum=prompt("Guess the game number");
console.log(userNum);
while(userNum!=gameNum){
  userNum=prompt("You entered the wrong number.Guess again ");
}
console.log("Conratulation ,you entered the right number")