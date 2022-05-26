var tentativa = 3
var n = parseInt(Math.random() * 10)
var acertou = false

function check(){ 
  if(tentativa == 0){
    acertou = false
    tentativa = tentativa + 3
    n = parseInt(Math.random() * 10)
    document.getElementById("b").value="GO!";
    result.innerHTML = `[Resultado]`
  }
  else if(tentativa > 0){
    var x = parseInt(document.getElementById('num').value)
    if(x == n){
      acertou = true
      tentativa = 0
      result.innerHTML = `Acertou`
      document.getElementById("b").value="Tente Novamente";
    }
    else if(x > n){
      tentativa = tentativa - 1
      result.innerHTML = `Tente um número menor. Restam ${tentativa} tentativas`
      document.getElementById("b").value="GO!";
    }
    else{
      tentativa = tentativa - 1
      result.innerHTML = `Tente um número maior. Restam ${tentativa} tentativas`
      document.getElementById("b").value="GO!";
    }
  }
  if(tentativa == 0 && !acertou){
    result.innerHTML = `Acabaram as tentativas. O número era ${n}`
    document.getElementById("b").value="Tente Novamente";
  }
  
}
