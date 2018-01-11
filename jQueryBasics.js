// below code to test if jquery has been loaded
// if(jQuery){
// 	alert("jQuery loaded");
// }
// else{
// 	alert("no jQuery");
// }

$("div").css("background", "purple");
$("div.highlight").css("width","200px"); //selects only div with class highlight
$("#third").css("border","2px solid orange");
$("div:first-of-type").css("color", "yellow"); //you can also use $("div:first"), 
											   // but it is slower than first-of-type.
$('h1').text("hi"); //can change the content by passing the arguments to text(), it can aslo be used to display the content of the tag by not passing the argument
//.html() method will change the html structure of the tag. .text() changes the content of the html tag
										   
