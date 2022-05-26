var c1 = {
  nome: "Luffy",
  imagem: "https://images-na.ssl-images-amazon.com/images/I/81oer5HZzTL._AC_SL1414_.jpg",
  atributos: {
    Ataque: 96,
    Defesa: 65,
    Inteligência: 26
  }
}

var c2 = {
  nome: "Zoro",
  imagem: "https://images-na.ssl-images-amazon.com/images/I/81WCoIN3OBL._AC_SY741_.jpg",
  atributos: {
    Ataque: 84,
    Defesa: 86,
    Inteligência: 38
  }
}

var c3 = {
  nome: "Sanji",
  imagem: "https://i.pinimg.com/236x/01/c7/6a/01c76ad7fcdcd179ec6a3954f5480009.jpg",
  atributos: {
    Ataque: 74,
    Defesa: 61,
    Inteligência: 76
  }
}

var c4 = {
  nome: "Nami",
  imagem: "https://images-na.ssl-images-amazon.com/images/I/51095%2BRf2tL._AC_.jpg",
  atributos: {
    Ataque: 42,
    Defesa: 52,
    Inteligência: 89
  }
}

var c5 = {
  nome: "Robin",
  imagem: "https://m.media-amazon.com/images/I/81N8HnjtMhL._AC_SL1414_.jpg",
  atributos: {
    Ataque: 70,
    Defesa: 68,
    Inteligência: 92
  }
}

var cartas = [c1, c2, c3, c4, c5]
var cartaMaq
var cartaJog

function sortearCarta(){
  var nCartaMaq = Math.floor(Math.random() * 5);
  cartaMaq = cartas[nCartaMaq]
  console.log(nCartaMaq)
  var nCartaJog = Math.floor(Math.random() * 5);
  while(nCartaJog == nCartaMaq){
    nCartaJog = Math.floor(Math.random() * 5);
  }
  cartaJog = cartas[nCartaJog]
  console.log(nCartaJog)
  
  document.getElementById('btnSortear').disabled = true
  document.getElementById('btnJogar').disabled = false
  
  exibirOpcoes()
}

function exibirOpcoes(){
  document.getElementById('nome').innerHTML = cartaJog.nome + "<br><br>"
  document.getElementById('imagem').innerHTML = "<img src='" + cartaJog.imagem + "'><br>"
  
  var atributosCarta = ""
  for(var x in cartaJog.atributos){
    atributosCarta += x + ": " + cartaJog.atributos[x] + "<br>"
  }
  document.getElementById('atributos').innerHTML = atributosCarta + "<br><br>"
  document.getElementById('h2').innerHTML = "Escolha o seu atributo<br><br>"
  var opcoesTexto = ""
  for(var atributo in cartaJog.atributos){
    opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + "<br>"
  }
  document.getElementById('opcoes').innerHTML = opcoesTexto
}

function getAtributo(){
  var radioAtributo = document.getElementsByName('atributo')
  for(var i=0; i<radioAtributo.length; i++){
    if(radioAtributo[i].checked){
      return radioAtributo[i].value
    }
  }
}

function jogar(){
  var atributoSelecionado = getAtributo()
  if(cartaJog.atributos[atributoSelecionado] > cartaMaq.atributos[atributoSelecionado]){
    document.getElementById('nome').innerHTML = "Você venceu!"
    document.getElementById('imagem').innerHTML = ""
    document.getElementById('atributos').innerHTML = ""
    document.getElementById('h2').innerHTML = ""
    document.getElementById('opcoes').innerHTML = ""
  }
  else if(cartaJog.atributos[atributoSelecionado] < cartaMaq.atributos[atributoSelecionado]){
    document.getElementById('nome').innerHTML = "Você perdeu!"
    document.getElementById('imagem').innerHTML = ""
    document.getElementById('atributos').innerHTML = ""
    document.getElementById('h2').innerHTML = ""
    document.getElementById('opcoes').innerHTML = ""
  }
  else{
    document.getElementById('nome').innerHTML = "Você empatou!"
    document.getElementById('imagem').innerHTML = ""
    document.getElementById('atributos').innerHTML = ""
    document.getElementById('h2').innerHTML = ""
    document.getElementById('opcoes').innerHTML = ""
  }
  document.getElementById('btnSortear').disabled = false
  document.getElementById('btnJogar').disabled = true
}
