var numSquares = 6;
var colors= [];
var pickedColor;
var squares= document.getElementsByClassName("square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    //mode button event listners
    setupModeButtons();
    setupSquares();
    
    reset();
}

function setupModeButtons(){
    for(var i =0; i<modeButtons.length; i++){
        modeButtons[i].addEventListener("click",function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            if(this.textContent==="Easy"){
                numSquares=3;
            }
            else{
                numSquares = 6;
            }
            reset();
        });
    }
}

function setupSquares(){
    for(var i=0; i<squares.length; i++){
        //add click llistener to the list
        squares[i].addEventListener("click",function(){
            //grap color of picked square
            var clickedColor=this.style.backgroundColor;
            if(clickedColor===pickedColor){
                messageDisplay.textContent="Correct!";
                resetButton.textContent = "Play Again?";
                changeColors(pickedColor);
                h1.style.background = pickedColor;
            }
            //compare color to pickedColor
            else{
                this.style.backgroundColor="#232323";
                messageDisplay.textContent="Try again";
            } 
        });
    }
}

function reset(){
     //generate new colours
     colors=generateRandomColors(numSquares);
     //pick a new random color from array
     pickedColor=pickcolor();
     //change colorDisplay to match picked color
     colorDisplay.textContent = pickedColor;
     //change colors of the squares
     resetButton.textContent = "New Colours";
     messageDisplay.textContent ="";
     for(var i=0; i<squares.length; i++){
         if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor=colors[i];
         } else{
             squares[i].style.display = "none";
         }
     }
     //change the background colour to first state
     h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click",function(){
    reset();
});

colorDisplay.textContent=pickedColor;



function changeColors(color){
    //loop through all square
    for(var i=0;i<squares.length;i++){
        //change each color to match given color
        squares[i].style.backgroundColor=color;
    }
}

function pickcolor(){
   var random= Math.floor(Math.random()*colors.length);
   return colors[random];
}

function generateRandomColors(num){
    //make an array
    var arr =[];
    //repeat num times
    for(var i=0; i<num;i++){
        //get random color and push into array
        arr.push(randomColor());
    }
    // retun the array
    return arr;
}

function randomColor(){
    //pick a "red" from 0 to 255
    var r= Math.floor(Math.random() * 256);
    //pick a "green" from 0 to 255
    var g= Math.floor(Math.random() * 256);
    //pick a "blue" from 0 to 255
    var b= Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")"
}