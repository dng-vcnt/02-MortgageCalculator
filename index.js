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
	var monthlyInterestRate = (interestRate / 100) / period;		// r
	var compoundedInterestRate = Math.pow((1 + monthlyInterestRate), numOfPayments);	// (1+r)^n
	var interestQuotient = (monthlyInterestRate * compoundedInterestRate) / (compoundedInterestRate - 1);  // (r*(1+r)^n)/(((1+r)^n)-1)
	var monthlyPayment = Math.round((loanBalance * interestQuotient) * 100) / 100;

	$("#output").text("Your monthly payment is $" + monthlyPayment + ".");
});