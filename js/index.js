alert("Hello and Welcome To this Simple Calculator !!!");

numberOne = prompt("Imput your first number:");
numberTwo = prompt("Imput your second number:");


/* Condition to check if the input from user is correct */ 

if(isNaN(numberOne) && isNaN(numberTwo)){
	alert("Incorrect input, please input number next time !!!");
	throw("endThisPlease");
}

/* Actual Calculator */

typeOfCalculator = prompt("What type of calculator do you want: (1)Normal - (2)Advanced");

if(typeOfCalculator == 1){

	calculatorChoice = prompt("Please choose which action you want: (1)Addition - (2)Substraction - (3)Divison - (4)Multiplication");

	if(calculatorChoice == 1){
		addNumber =  parseInt(numberOne) + parseInt(numberTwo);
		alert(addNumber);
	}else if(calculatorChoice == 2){
		substractNumber = parseInt(numberOne) - parseInt(numberTwo);
		alert(substractNumber);
	}else if(calculatorChoice == 3){
		divideNumber = parseInt(numberOne) / parseInt(numberTwo);
		alert(divideNumber);
	}else if(calculatorChoice == 4){
		multiplication = parseInt(numberOne) * parseInt(numberTwo);
		alert(multiplication);
	}else{
		alert("Incorrect input please choose a number from 1 to 4. Thank you!")
	}
} else {

	calculatorChoice = prompt("Please choose which action you want: (1)Addition - (2)Substraction - (3)Divison - (4)Multiplication - (5)Power - (6)Square Root");

	if(calculatorChoice == 1){
		addNumber =  parseInt(numberOne) + parseInt(numberTwo);
		alert(addNumber);
	}else if(calculatorChoice == 2){
		substractNumber = parseInt(numberOne) - parseInt(numberTwo);
		alert(substractNumber);
	}else if(calculatorChoice == 3){
		divideNumber = parseInt(numberOne) / parseInt(numberTwo);
		alert(divideNumber);
	}else if(calculatorChoice == 4){
		multiplication = parseInt(numberOne) * parseInt(numberTwo);
		alert(multiplication);
	}else if(calculatorChoice == 5){
		power = parseInt(numberOne) ** parseInt(numberTwo);
		alert(power);
	}else if(calculatorChoice == 6){
		SquareRoot = Math.sqrt(parseInt(numberOne)) + Math.sqrt(parseInt(numberTwo));
		alert(SquareRoot);
	}else{
		alert("Incorrect input please choose a number from 1 to 6. Thank you!")
	}
}


alert("Thank you for using this calculator !!");
tripCalculatorChoice = prompt("Do you want to use our trip calculator? : (1)Yes (2)No");


if(tripCalculatorChoice == 1){
	userDistance = prompt("Please input the distance you want to travel : ");
	userFuel = prompt("Please input your fuel efficiency(mpg):");
	userCostPerGallon = prompt("Please input Cost per Gallon:");
	userSpeed = prompt("Please input your speed:")

	alert("Feature Still In Progress. Please try again later !!!")
	if (userSpeed > 60 ){
		userCostPerGallon = userCostPerGallon - 2; 
	}
}
