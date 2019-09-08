var numX =  document.getElementById('x');
var numY = document.getElementById('y');
var result = document.getElementById('result');
var form = document.getElementById('percentage');

form.addEventListener('submit' , function(event) {
	 if (!numX.value || !numY.value) {
	 	alert("Please enter the value!!!")
	 }
	 else{
	 	var x = numX.value;
	    var y = numY.value;
	    var answer = x/y;
        var output = answer*100;
        result.innerText = "Answer: " + output + "%";
	   event.preventDefault();
	 }

});
var numPrincipal =  document.getElementById('principal');
var numRate = document.getElementById('rate');
var numTime = document.getElementById('time');
var outputSi = document.getElementById('simpleInterest');
var formSi = document.getElementById('si');

formSi.addEventListener('submit', function(event2){
	var p = numPrincipal.value;
	var r = numRate.value;
	var t = numTime.value;
	var calculationOfSi = p*r*t;
	var  divideSi = calculationOfSi/100;
	outputSi.innerText = "Simple Interest: " + divideSi;
	event2.preventDefault();

});