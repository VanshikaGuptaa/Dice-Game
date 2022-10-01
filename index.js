
var randomNumber1 = Math.floor(Math.random()*6) + 1; //1-6
var randomDiceImage = "dice" + randomNumber1 + ".png"; //DICE1.PNG-DICE6.PNG
var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/die6.png;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

//if conditions 
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 wins";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 wins🚩";
}
else{
    document.querySelector("h1").innerHTML = "🚩Its a tie🚩";
}