// Generating random numbers
let randomNumber1=Math.floor(Math.random()*6+1);
let randomNumber2=Math.floor(Math.random()*6+1);

//Generate random images
let randomImage1="dice"+randomNumber1+".svg";
let randomImage2="dice"+randomNumber2+".svg";

//Select the image element using DOM.
const image1=document.getElementById("image1");
const image2=document.getElementById("image2");

// Changing the source files

image1.setAttribute("src",randomImage1);
image2.setAttribute("src",randomImage2);

// Conditional Statement
if (randomNumber1>randomNumber2) {
    document.getElementById("result").innerHTML="Priyansh Wins!!";
    document.getElementById("body").style.backgroundImage="url('Firework1.gif')";
}
else if (randomNumber1<randomNumber2)
{
   document.getElementById("result").innerHTML="Alekh Wins!!";
    document.getElementById("body").style.backgroundImage="url('Firework2.gif')";
}
else if (randomNumber1==randomNumber2) {
    document.getElementById("result").innerHTML="DRAW!!";
    document.getElementById("body").style.backgroundImage="url('Equalizer.gif')";

}

//Changing background according to the winner.


