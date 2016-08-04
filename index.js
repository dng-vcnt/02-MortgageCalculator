$(document).ready(function() {
	console.log("ready");
});

$("#btnCalculate").click(function(){
	// M = P [ (r * (1+r)^n) / (((1+r)^n) - 1) ]

	var loanBalance = $("#loanBalance").val();				// P
	var interestRate = $("#interestRate").val();			// Annual interest rate
	var loanTerm = $("#loanTerm").val();
	var period = $("#period option:selected").val();	

	var numOfPayments = loanTerm * period;							// n 
		console.log(numOfPayments);
	var monthlyInterestRate = (interestRate / 100) / period;		// r
		console.log(monthlyInterestRate);
	var compoundedInterestRate = Math.pow((1 + monthlyInterestRate), numOfPayments);	// (1+r)^n
		console.log(compoundedInterestRate);
	var interestQuotient = (monthlyInterestRate * compoundedInterestRate) / (compoundedInterestRate - 1);  // (r*(1+r)^n)/(((1+r)^n)-1)
		console.log(interestQuotient);
	var monthlyPayment = Math.round((loanBalance * interestQuotient) * 100) / 100;

	$("#output").text("Your monthly payment is $" + monthlyPayment + ".");
});