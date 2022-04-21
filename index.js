var player1 = (Math.floor(Math.random()*6)+1) ;
var player2 =(Math.floor(Math.random()*6)+1) ;

var dice1 = "dice"+player1+".png";
var dice2 = "dice"+player2+".png";


var randomimagesource1= "images/"+dice1;
var randomimagesource2= "images/"+dice2;
var img1 = document.querySelectorAll('img')[0];
var img2 = document.querySelectorAll('img')[1];
img1.setAttribute('src',randomimagesource1);
img2.setAttribute('src',randomimagesource2);
console.log("Player 1 Rolled A "+player1 +" And Player 2 Rolled A "+ player2);
 if(player1>player2){
   document.querySelector("h1").innerHTML = "Player 1 Wins !";

 }
else if(player2>player1){

  document.querySelector("h1").innerHTML = "Player 2 Wins !";
}
else{
  document.querySelector("h1").innerHTML = "Draw !";
}
