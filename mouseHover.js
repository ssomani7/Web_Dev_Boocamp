var liElements = document.querySelectorAll("li");


for(var i=0; i<liElements.length; i++){
	liElements[i].addEventListener("mouseover", function(){
		this.classList.add("selected");
	});

	liElements[i].addEventListener("mouseout", function(){
		this.classList.remove("selected");
	});

	liElements[i].addEventListener("click", function(){
		this.classList.toggle("done");
	});
}


/*code for selecting the first li, below code works for only first 
li inside a HTML code*/

/*var liElements = document.querySelector("li");

liElements.addEventListener("mouseover", function(){
	this.classList.add("selected");
});

liElements.addEventListener("mouseout", function(){
	this.classList.remove("selected");
});

liElements.addEventListener("click", function(){
		this.classList.toggle("done");
});
*/