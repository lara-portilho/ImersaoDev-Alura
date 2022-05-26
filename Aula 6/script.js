var jog = []

function calculaPontos(jogador){
  var pontos = (jogador.vitorias*3) + jogador.empates
  return pontos
}

function mostrarJogadores(jogadores){
  var html = ""
  
  for(var i = 0; i < jogadores.length; i++){
    jogadores[i].pontos = calculaPontos(jogadores[i])
    html += "<tr><td>" + jogadores[i].nome + "</td>"
    html += "<td><button id='bRemove' onClick='removerVitoria(" + i + ")'>-</button>&nbsp;" + jogadores[i].vitorias + "&nbsp;<button id='bAdd' onClick='adicionarVitoria(" + i + ")'>+</button></td>"
    
    html += "<td><button id='bRemove' onClick='removerEmpate(" + i + ")'>-</button>&nbsp;" + jogadores[i].empates + "&nbsp;<button id='bAdd' onClick='adicionarEmpate(" + i + ")'>+</button></td>"
    
    html += "<td><button id='bRemove' onClick='removerDerrota(" + i + ")'>-</button>&nbsp;" + jogadores[i].derrotas + "&nbsp;<button id='bAdd' onClick='adicionarDerrota(" + i + ")'>+</button></td>"
    
    html += "<td>" + jogadores[i].pontos + "</td></tr>"
  }
  
  var tabelaJogadores = document.getElementById('tabelaJogadores')
  tabelaJogadores.innerHTML = html
}

function adicionarJogador(){
  var novoNome = document.querySelector('#nomeAdicionar').value
  var novo = {
    nome: novoNome,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  }
  jog.push(novo)
  document.querySelector('#nomeAdicionar').value = ""
  mostrarJogadores(jog)
}

function removerVitoria(x){
  var j = jog[x]
  if(j.vitorias>0){
    j.vitorias--
  }
  mostrarJogadores(jog)
}

function adicionarVitoria(x){
  var j = jog[x]
  j.vitorias++
  mostrarJogadores(jog)
}

function removerEmpate(x){
  var j = jog[x]
  if(j.empates>0){
    j.empates--
  }
  mostrarJogadores(jog)
}

function adicionarEmpate(x){
  var j = jog[x]
  j.empates++
  mostrarJogadores(jog)
}

function removerDerrota(x){
  var j = jog[x]
  if(j.derrotas>0){
    j.derrotas--
  }
  mostrarJogadores(jog)
}

function adicionarDerrota(x){
  var j = jog[x]
  j.derrotas++
  mostrarJogadores(jog)
}
