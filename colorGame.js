var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
// var easyButton = document.querySelector("#easyBtn");
// var hardButton = document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode");

colorDisplay.textContent = pickedColor;

for(var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		reset();
	});
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
// easyButton.addEventListener("click", function(){
// 	messageDisplay.textContent = "";
// 	h1.style.backgroundColor = "steelblue";
// 	easyButton.classList.add("selected");
// 	hardButton.classList.remove("selected");
// 	numSquares=3;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i=0; i<squares.length;i++){
// 		//for first 3 colors as our colors variable has 3 colors in easy button
// 		if(colors[i]){
// 			squares[i].style.backgroundColor = colors[i];
// 		}
// 		else{
// 			squares[i].style.display = "none"; // hides the lower 3 colors, as they are not changing in easy mode
// 		}
// 	}
// });

// hardButton.addEventListener("click", function(){
// 	messageDisplay.textContent = "";
// 	h1.style.backgroundColor = "steelblue";
// 	hardButton.classList.add("selected");
// 	easyButton.classList.remove("selected");
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i=0; i<squares.length;i++){ //no need of if-else here, as we will loop over all 6 colors and changes apply to all of them.
// 			squares[i].style.backgroundColor = colors[i];
// 			squares[i].style.display = "block";	//unhides the lower 3 colors when switched from easy to hard.
// 	}
// });

resetButton.addEventListener("click", function(){
	// messageDisplay.textContent = ""; //sets the display msg to empty string.
	// this.textContent = "New Colors";
	// h1.style.backgroundColor = "steelblue";
	// colors = generateRandomColors(numSquares); //generate all new colors
	// pickedColor = pickColor(); //pick a new random color from array
	// colorDisplay.textContent = pickedColor; //change color display to match pickedColor
	// //change colors of square
	// for(var i = 0; i < squares.length; i++){
	// 	squares[i].style.backgroundColor = colors[i];
	// }
	reset();
});

for(var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i]; // add inital colors to squares

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
