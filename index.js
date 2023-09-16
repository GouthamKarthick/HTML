var index = Math.floor(Math.random()*6)+1;
var randomDiceImage = "images/dice"+index+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomDiceImage);

var index1 = Math.floor(Math.random()*6)+1;
var randomDiceImage1 = "images/dice"+index1+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage1);

if (index > index1){
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else if (index < index1){
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}
else{
    document.querySelector("h1").innerHTML = "Draw";
}