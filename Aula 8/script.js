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

var cartaMaquina
var cartaJogador
var cartas = [c1, c2, c3, c4, c5]

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 5)
  cartaMaquina = cartas[numeroCartaMaquina]

  var numeroCartaJogador = parseInt(Math.random() * 5)
  while (numeroCartaJogador == numeroCartaMaquina) {
    numeroCartaJogador = parseInt(Math.random() * 5)
  }
  cartaJogador = cartas[numeroCartaJogador]

  document.getElementById('btnSortear').disabled = true
  document.getElementById('btnJogar').disabled = false
  exibeCartaJogador()
  document.getElementById("carta-maquina").innerHTML = '<img src="https://i.pinimg.com/736x/7b/bf/c3/7bbfc36f362e8738034b46c766ac2fc0.jpg"style=" width: inherit; height: inherit; position: absolute;">'
  document.getElementById("resultado").innerHTML = ""
}

function exibeCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador")
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style="width: inherit; height: inherit; position: absolute;">';
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
  var opcoesTexto = ""

  for (var atributo in cartaJogador.atributos) {
    opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
  }

  var html = "<div id='opcoes' class='carta-status'>"

  divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}  

function obtemAtributoSelecionado() {
  var radioAtributo = document.getElementsByName('atributo')
  for (var i = 0; i < radioAtributo.length; i++) {
    if (radioAtributo[i].checked) {
      return radioAtributo[i].value
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado()

  if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
    document.getElementById("resultado").innerHTML = '<p class="resultado-final">Venceu!</p>'
  } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
    document.getElementById("resultado").innerHTML = '<p class="resultado-final">Perdeu!</p>'
  } else {
    document.getElementById("resultado").innerHTML = '<p class="resultado-final">Empatou!</p>'
  }
  
  exibeCartaMaquina()
  
  document.getElementById('btnSortear').disabled = false
  document.getElementById('btnJogar').disabled = true
}

function exibeCartaMaquina(){
  var divCartaMaquina = document.getElementById("carta-maquina")
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style="width: inherit; height: inherit; position: absolute;">';
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
  var opcoesTexto = ""

  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>&nbsp;&nbsp;" + atributo + " " + cartaMaquina.atributos[atributo] + "</p>"
  }

  var html = "<div id='opcoes' class='carta-status'>"

  divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}
