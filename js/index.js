alert("Hello To this Simple Calculator !!!");

numberOne = prompt("Imput your first number:");
numberTwo = prompt("Imput your second number:");


/* Condition to check if the input from user is correct */ 

if(numberOne == NaN && numberTwo == NaN){
	alert("Incorrect input, please input number next time !!!");
	throw("endThisPlease");
}

/* Actual Calculator */

typeOfCalculator = prompt("What type of calculator do you want: (1)Normal, (2)Advanced");

if(typeOfCalculator == 1){

	calculatorChoice = prompt("Please choose which action you want: (1)Add, (2)Substract");

	if(calculatorChoice == 1){
		addNumber =  10 + 20;
		alert(addNumber);
	}else if(calculatorChoice == 2){
		substractNumber = 5 - 2;
		alert(substractNumber);
	}else if(calculatorChoice == 3){
		divideNumber = 10 / 2;
		alert(divideNumber);
	}else{
		lastOperation = 5 * 5;
		alert(lastOpration);
	}
} else {

		calculatorChoice = prompt("Please choose which action you want: (1)Add, (2)Substract");

	if(calculatorChoice == 1){
		addNumber = 10 + 20;
		alert(addNumber);
	}else if(calculatorChoice == 2){
		substractNumber = 5 - 2;
		alert(substractNumber);
	}else if(calculatorChoice == 3){
		divideNumber = 10 / 2;
		alert(divideNumber);
	}else if(calculatorChoice == 4){
		lastOperation = 5 * 5;
		alert(lastOpration);
	}else if(calculatorChoice == 5){
		oke = 4 ** 4;
		alert("oke");
	}else if(calculatorChoice == 6){
		oke2 = 99 + 99;
		alert(oke2);
	}
}



alert("Thank you for using this calculator !!")
