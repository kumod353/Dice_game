// for first dice
var randomNumber1=Math.floor(Math.random()*6) + 1;
var randomImage1="dice" + randomNumber1 + ".png";
var randomDiceImage1="images/" + randomImage1;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDiceImage1);

//for 2nd dice
var randomNumber2=Math.floor(Math.random()*6)+1;
//var randomImage2="dice" + randomNumber2 + ".png";
//var randomDiceImage2="images/dice" + randomImage2;
var randomDiceImage2="images/dice" + randomNumber2 + ".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDiceImage2);


//winner announcement
if(randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML="player1 is winner.";
}
else if(randomNumber2>randomNumber1) {
    document.querySelector("h1").innerHTML="player2 is winner.";
}
else 
document.querySelector("h1").innerHTML="draw.";