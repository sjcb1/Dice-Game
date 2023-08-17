const btn = document.querySelector("button")

//buton function
btn.addEventListener("click", function(){

  // Dice 1 roll
let randomNum1 = Math.floor(Math.random() *6) +1;
let randomImgSrc1 ="./images/dice" + randomNum1 +".png";
document.querySelectorAll("img")[0].setAttribute("src", randomImgSrc1);
//Dice 2 roll
let randomNum2 = Math.floor(Math.random() *6) +1;
let randomImgSrc2 ="./images/dice" + randomNum2 +".png";
let d2 = document.querySelectorAll("img")[1].setAttribute("src", randomImgSrc2);
  
//winning statements
if (randomNum1 > randomNum2){
  document.querySelector("h1").innerText = "Player 1, You WIN!!"
}
 
else if (randomNum2 > randomNum1) {
  document.querySelector("h1").innerText = "Player 2, You WIN!!"
}
else {
  document.querySelector("h1").innerText = "Its's a DRAW. Go Again!!"
}})