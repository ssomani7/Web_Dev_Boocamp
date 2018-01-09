// var fname = prompt("Enter First Name:");
// var lname = prompt("Enter Last Name:");
// var age = prompt("Enter age:");
// alert(fname+" "+lname+" is "+age+" years old.");
// console.log("your first name is "+fname+"."+"\n"+"your last name is "+lname+"."+"\n"+"you are "+age+" years old.");
// alert("connected");
//  var num = Number(prompt("Enter a number"));
//  var num1 = num;
//  var string1 = prompt("Enter a string with hyphen in it(-):");

//  function isEven(num){
//  	if(num % 2 === 0)
//  		return true;
//  	else
//  		return false;
//  }

// function factorial(num){
// 	var fact = 1;

// 	if (num < 0){
// 		return "Factorial not possible for negative numbers";
// 	} 
// 	else{
// 		if(num === 0 || num === 1){
// 			return "factorial for "+num+" is 1";
// 		}
// 		else{
// 			while(num !== 0){
// 				fact = fact * num;
// 				num--;
// 			}
// 			return "factorial for "+num1+" is "+fact;
// 		}
// 	}	
// }

// function kebabToSnake(string1){
// 	var string2 = string1.replace(/-/g, "_");
// 	return string2;
// }
function isUniform(arr){
	for(var i=0, j=1; j<arr.length; j++){
		if (arr[i] !== arr[j]){
			return "array not uniform";
		}
	}
	return "array is uniform";
}

// someObject