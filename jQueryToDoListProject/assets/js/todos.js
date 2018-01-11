/*
1)We can only add listeners in jQuery on events that exist when the code is run first time.
2)When the code runs the first time, there are no extra 'li', that are being added by the code below on line 18.
3)So we add listener to 'ul', but in '.on()' where we define 'li', we are actually listening only on 'li' and not the 'ul'.
4)Hence the functionality of adding in 'click' is applied to only 'li' and no to the parent 'ul'. 
5)Similar logic applied to delete function below it.
*/ 

//Check off specific todos by clicking 
$("ul").on("click", "li", function(){ 
	$(this).toggleClass("completed"); //First define 'completed' in css
});

//Click on 'X' to delete todo
$("ul").on("click", "span", function(event){ //event is just a placeholder, you can name it anything
	$(this).parent().fadeOut(500,function(){ //Parent function returns the 'li' in which 'span' is enclosed.
		$(this).remove(); //By definig '.remove' inside '.fadeOut', we are making the fadeOut event occur completely first and then remove. 
	});
	event.stopPropagation(); //This line stops event bubbling to parent & only fires the event intended, in this case 'span'
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){ //13 represents the key-code for 'ENTER'/'RETURN' 
		var todoText = $(this).val(); //Extacting the text that will be typed in 'input textbox'
		$(this).val(""); //Setting the input textbox to blank once we have extracted the value
		$("ul").append("<li><span><i class='fa fa-trash-o'></i></span> "+todoText+"</li>"); //Creating a new 'li' and adding to 'ul'.		
	}
});

$(".fa-pencil").click(function(){
	$('input[type="text"]').fadeToggle();
});