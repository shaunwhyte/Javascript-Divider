
document.getElementById('submitButton').onclick = function(){
	  let num1 = parseFloat(document.getElementById('number1').value);
	  let num2 = parseFloat(document.getElementById('number2').value);

	  var lastChar = num2[num2.length - 1];
	  let result = '';
	  if(lastChar == '6'){
			result =  (a + b); 
	  }else if(lastChar == '2'){
			result = "ERROR"; 
	  }else{
			result = parseFloat( num1 * (num2 ** -1)).toFixed(3);
	  }
	  
	  document.getElementById('result').value = result;
	
}

