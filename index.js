var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDice1 = "dice" + randomNumber1 +".png";
document.querySelector(".img1").setAttribute("src" , "./images/"+ randomDice1);
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDice2 = "dice"+ randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src" , "./images/"+ randomDice2);
function winner(){
    if(randomNumber1 > randomNumber2){
        var change = document.querySelector("h1");
        change.innerHTML = ("🚩Player 1 Wins!");
    }
    else if( randomNumber1 < randomNumber2)
    {
        var change = document.querySelector("h1");
        change.innerHTML = (" Player 2 Wins!🚩");
    }
    else
    {
        var change = document.querySelector("h1");
        change.innerHTML = ("Its a Draw!");
    }
}
winner();
