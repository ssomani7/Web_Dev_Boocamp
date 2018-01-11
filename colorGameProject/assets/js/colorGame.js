var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setUpModeButtons();
	setUpSquares();
	reset();	
}

function setUpModeButtons(){
	//mode buttons events listeners
	for(var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

function setUpSquares(){
	for(var i = 0; i < squares.length; i++){
		//add click listeners to squares
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor; //grab color of clicked square
			//compare color to picked color
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct";
				resetButton.textContent = "Play Again?";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			}
			else{
				this.style.backgroundColor = "#232323"; //changes incorrect sqaure to background color
				messageDisplay.textContent = "Try Again";
			}
		});
	}	
}

function reset(){
	messageDisplay.textContent = ""; //sets the display msg to empty string.
	resetButton.textContent = "New Colors";
	h1.style.backgroundColor = "steelblue";
	colors = generateRandomColors(numSquares); //generate all new colors
	pickedColor = pickColor(); //pick a new random color from array
	colorDisplay.textContent = pickedColor; //change color display to match pickedColor
	//change colors of square
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}		
	}
}

resetButton.addEventListener("click", function(){
	reset();
});


function changeColors(color){
	//loop through all squares
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color; //each sqaure changed to the color of the clickedColor
	}
}

function pickColor(){
	/*Math.random() generates a random number between 0 and 1, but not 1, i.e, maximum it can go is 0.999...
	since we want our random choice to be according to the length colors array, we multiply Math.random by length of the
	color array.
	But since our array index are whole numbers, we use Math.floor function on the above result, which will extract only 
	the non-decimal part*/
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = []; //make an array
	//repeat it num times
	for(var i = 0; i < num ; i++){
		arr.push(randomColors()); //get random color and push into arr
	}
	return arr; //return the array
}

function randomColors(){
	var r = Math.floor(Math.random() * 256); //random value between 0 to 255;
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb("+r+", "+g+", "+b+")";
}
