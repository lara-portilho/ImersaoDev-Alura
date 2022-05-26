function calc(){
	var n1 = parseInt(window.document.getElementById('n1').value)
	var n2 = parseInt(window.document.getElementById('n2').value)
	var op = document.querySelector('input[name="op"]:checked').value;
	result.innerHTML = `${op}`
	if(op=="som"){
		var r = n1+n2
		result.innerHTML = `${n1} + ${n2} = ${r}`
	}
	else if(op=="sub"){
		var r = n1-n2
		result.innerHTML = `${n1} - ${n2} = ${r}`
	}
	else if(op=="mul"){
		var r = n1*n2
		result.innerHTML = `${n1} * ${n2} = ${r}`
	}
	else if(op=="div"){
		if(n2==0){
			result.innerHTML = `Denominador 0!`
		}
		else{
			var r = n1/n2
			result.innerHTML = `${n1} / ${n2} = ${r}`
		}
	}
	else{
		result.innerHTML = `Erro`
	}
}
