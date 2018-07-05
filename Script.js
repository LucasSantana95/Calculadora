(function(doc,win){
	'use strict';

	var $input = doc.querySelector('[data-js="input"]');
	var $numbers = doc.querySelectorAll('[data-js="numbers"]');
	var $operators = doc.querySelectorAll('[data-js="operators"]');
	var $ce = doc.querySelector('[data-js="erase"]');
	var $result = doc.querySelector('[data-js="result"]');
	var $label = doc.querySelector('[data-js="labelResult"]');
	console.log($label);

	Array.prototype.forEach.call($numbers, function(button){
		button.addEventListener('click', addClickNumber, false);
	});
	Array.prototype.forEach.call($operators, function(button){
		button.addEventListener('click', addClickOperators, false);
	});

	$ce.addEventListener('click', eraseInput, false);
	$result.addEventListener('click', resultExpression, false);

	function addClickNumber(button){
		isValueZero()
		$input.value += this.value;
	}
	function addClickOperators(button){
		
		isValueZero()
		if(testOperator()){
			$input.value = $input.value.slice(0,-1)
		}

		$input.value += this.value;
				
	}
	function eraseInput(){
		$input.value = 0;
	}
	function resultExpression(){
	
		var numbers = $input.value.split(/\D/);
		var operators = $input.value.split(/\d+/).slice(1,-1);
		var newnumbers = isNull(numbers);
		inMinus(newnumbers);
		console.log(newnumbers);
		console.log(operators);
		calculate(newnumbers,operators);

	}
	function testOperator(){
		var operators = ['+','-','*','/'];
		return operators.some(function(operator){
			return operator == $input.value.split('').pop();
		})
;
	}
	function isValueZero(){
		if($input.value == '0')
		{
			$input.value = null;
		}
	}
	function calculate(num,op){
		
		var result = Number(num[0]);
		
		op.forEach(function(item, index, arr){
	
				switch(op[index]){

				case '+':
				result = result + Number(num[++index]);
				console.log(result);
				break;
				case '-':
				result = result - Number(num[++index]);
				console.log(result);
				break;
				case '*':
				result = result * Number(num[++index]);
				console.log(result);
				break;
				case '/':
				result = result / Number(num[++index]);
				console.log(result);
				break;
				}
			
		})

		$label.innerHTML =$input.value + ' = ' + result;
		$input.value = result;
	}
	function isNull(numbers){
		if(numbers[0] == ''){
			numbers = numbers.slice(1);
			console.log(numbers);
			return numbers;
		}
		else{
			return numbers;
		}
	}
	function inMinus(number){
		var firstItem = $input.value[0];
		if(firstItem == '-')
		{
			number[0] = firstItem+number[0];
		}
		console.log(firstItem);
	}

})(document,window);