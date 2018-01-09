var button = document.querySelector("button");
// var isPurple = false;

// button.addEventListener("click", function(){
// 	if(isPurple){
// 		document.body.style.background = "white";
// 	}
// 	else{
// 		document.body.style.background = "purple";
// 	}
// 	isPurple = !isPurple;
// });

// using classList and toggle properties
// define purple class in html using script or in css
button.addEventListener("click", function(){
	document.body.classList.toggle("purple");
});