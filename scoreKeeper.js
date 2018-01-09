// showcasing different ways of selecting 
var p1Button = document.getElementById("p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var winLimitInput = document.querySelector("#winLimit");
var winLimitDisplay = document.querySelector("p span"); /*new way of selecting, since the html
														contains only 1 pattern where a p tag 
														contains 1 span tag inside it*/
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click", function(){
	if(!gameOver){
		p1Score++;
		if(p1Score === winningScore){
			gameOver = true;
			p1Display.classList.add("winner");
			// p1Display.style.color = "green";
		}	
		console.log(p1Score);
		p1Display.textContent = p1Score;
	}
});

p2Button.addEventListener("click", function(){
	if(!gameOver){
		p2Score++;
		if(p2Score === winningScore){
			gameOver = true;
			p2Display.classList.add("winner");
			// p2Display.style.color = "green";
		}
		console.log(p2Score);
		p2Display.textContent = p2Score;
	}
});

resetButton.addEventListener("click",function(){
	reset();
});

winLimitInput.addEventListener("change", function(){
	winLimitDisplay.textContent = this.value; /* this refers to the variable on which the 
												 addEventListener has been called, i.e, 
												 "winLimitInput"*/
	winningScore = Number(this.value);
	reset();
});

function reset(argument) {
	p1Score = 0;
	p2Score = 0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	// p1Display.style.color = "inherit"; 
	// p2Display.style.color = "inherit";
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	gameOver = false;
}