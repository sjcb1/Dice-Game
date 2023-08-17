//first dice
let randomNum1 = Math.floor(Math.random() *6) +1;
let randomImgSrc1 ="./images/dice" + randomNum1 +".png";
document.querySelectorAll("img")[0].setAttribute("src", randomImgSrc1);

//second dice
let randomNum2 = Math.floor(Math.random() *6) +1;
let randomImgSrc2 ="./images/dice" + randomNum2 +".png";
let d2 = document.querySelectorAll("img")[1].setAttribute("src", randomImgSrc2);

//winning statement
const p1Win = "Player 1, You WIN!!";
const p2Win = "Player 2, You WIN!!";
const draw = "Its a Draw. GO Again";

let title = document.querySelector("h1");

if (randomNum1 > randomNum2){
  title.innerText = p1Win
}

else if (randomNum2 > randomNum1) {
 title.innerText = p2Win 
}

else {
  title.innerText = draw
}  