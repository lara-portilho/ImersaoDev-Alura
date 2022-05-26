var c1 = {
  nome: "Luffy",
  imagem: "https://i.ibb.co/FXdFPPh/Carta-One-Piece-Luffy.png",
  atributos: {
    Ataque: 96,
    Defesa: 65,
    Inteligência: 26
  }
}

var c2 = {
  nome: "Zoro",
  imagem: "https://i.ibb.co/c2G2Wq5/Carta-One-Piece-Zoro.png",
  atributos: {
    Ataque: 84,
    Defesa: 86,
    Inteligência: 38
  }
}

var c3 = {
  nome: "Nami",
  imagem: "https://i.ibb.co/f9gLZtK/Carta-One-Piece-Nami.png",
  atributos: {
    Ataque: 42,
    Defesa: 52,
    Inteligência: 89
  }
}

var c4 = {
  nome: "Usopp",
  imagem: "https://i.ibb.co/VvKkgdR/Carta-One-Piece-Usopp.png",
  atributos: {
    Ataque: 54,
    Defesa: 53,
    Inteligência: 78
  }
}

var c5 = {
  nome: "Sanji",
  imagem: "https://i.ibb.co/1T66XvS/Carta-One-Piece-Sanji.png",
  atributos: {
    Ataque: 74,
    Defesa: 61,
    Inteligência: 76
  }
}

var c6 = {
  nome: "Chopper",
  imagem: "https://i.ibb.co/HYRJVWq/Carta-One-Piece-Chopper.png",
  atributos: {
    Ataque: 62,
    Defesa: 69,
    Inteligência: 80
  }
}

var c7 = {
  nome: "Robin",
  imagem: "https://i.ibb.co/25sD6Wm/Carta-One-Piece-Robin.png",
  atributos: {
    Ataque: 70,
    Defesa: 68,
    Inteligência: 92
  }
}

var c8 = {
  nome: "Franky",
  imagem: "https://i.ibb.co/yqvwHQv/Carta-One-Piece-Franky.png",
  atributos: {
    Ataque: 87,
    Defesa: 88,
    Inteligência: 67
  }
}

var c9 = {
  nome: "Brook",
  imagem: "https://i.ibb.co/v3RynP0/Carta-One-Piece-Brook.png",
  atributos: {
    Ataque: 85,
    Defesa: 76,
    Inteligência: 67
  }
}

var c10 = {
  nome: "Jinbei",
  imagem: "https://i.ibb.co/vzmc5Gd/Carta-One-Piece-Jinbei.png",
  atributos: {
    Ataque: 93,
    Defesa: 90,
    Inteligência: 76
  }
}

var cartaMaquina
var cartaJogador
var cartas = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10]
var pontosJogador = 0
var pontosMaquina = 0

atualizaQuantidadeDeCartas()
atualizaPlacar()

function atualizaQuantidadeDeCartas(){ 
  var html = "Quantidade de cartas no jogo: " + cartas.length
  document.getElementById('quantidade-cartas').innerHTML = html
}

function atualizaPlacar() {
  var divPlacar = document.getElementById('placar')
  var html = "Jogador " + pontosJogador + " x " + pontosMaquina + " Máquina"
  divPlacar.innerHTML = html
}

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
  cartaMaquina = cartas[numeroCartaMaquina]
  cartas.splice(numeroCartaMaquina, 1)

  var numeroCartaJogador = parseInt(Math.random() * cartas.length)
  
  cartaJogador = cartas[numeroCartaJogador]
  cartas.splice(numeroCartaJogador, 1)

  document.getElementById('btnSortear').disabled = true
  document.getElementById('btnJogar').disabled = false

  document.getElementById("carta-maquina").innerHTML = '<img src="https://i.ibb.co/DGtC5bP/Carta-One-Piece-Verso.png" style=" width: inherit; height: inherit; position: absolute;">'
  exibeCartaJogador()
  atualizaQuantidadeDeCartas()
}

function exibeCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador")
  var imagem = '<img src="' + cartaJogador.imagem + '" style=" width: inherit; height: inherit; position: absolute;">';
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
  var opcoesTexto = ""

  for (var atributo in cartaJogador.atributos) {
    opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>&nbsp;" + atributo + ": " + cartaJogador.atributos[atributo] + "<br>"
  }

  var html = "<div id='opcoes' class='carta-status'>"

  divCartaJogador.innerHTML = imagem + nome + html + opcoesTexto + '</div>'
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
  var divResultado = document.getElementById("resultado")
  var atributoSelecionado = obtemAtributoSelecionado()

  if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
    htmlResultado = '<p class="resultado-final">Venceu</p>'
    pontosJogador++
  } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
    htmlResultado = '<p class="resultado-final">Perdeu</p>'
    pontosMaquina++
  } else {
    htmlResultado = '<p class="resultado-final">Empatou</p>'
  }

  divResultado.innerHTML = htmlResultado
  document.getElementById('btnJogar').disabled = true
  
  exibeCartaMaquina()
  atualizaPlacar()
  
  if(cartas.length != 0) {
    document.getElementById('btnProximaRodada').disabled = false  
  }
  else {
    if(pontosJogador > pontosMaquina){
      document.getElementById('resultado').innerHTML = "Você ganhou a partida!"
    }
    else if(pontosJogador > pontosMaquina){
      document.getElementById('resultado').innerHTML = "Você perdeu a partida..."
    }
    else{
      document.getElementById('resultado').innerHTML = "Você empatou com a máquina."
    }
    
    document.getElementById('quantidade-cartas').innerHTML = "Atualize a página para jogar novamente."
  }
}

function exibeCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina")
  var imagem = '<img src="' + cartaMaquina.imagem + '" style=" width: inherit; height: inherit; position: absolute;">'
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
  var opcoesTexto = ""

  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>&nbsp;&nbsp;" + atributo + ": " + cartaMaquina.atributos[atributo] + "<br>"
  }

  var html = "<div id='opcoes' class='carta-status --spacing'>"

  divCartaMaquina.innerHTML = imagem + nome + html + opcoesTexto + '</div>'
}

function proximaRodada() {
  document.getElementById('btnProximaRodada').disabled = true
  document.getElementById('btnSortear').disabled = false
  document.getElementById('resultado').innerHTML = ""
  document.getElementById('carta-jogador').innerHTML = ""
  document.getElementById('carta-maquina').innerHTML = ""
}
