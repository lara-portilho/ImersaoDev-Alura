var nome = ["Fruits Basket", "Kobato.", "Fullmetal Alchemist Brotherhood", "Beastars", "Dr. Stone"]

var capa = ["https://cdn.myanimelist.net/images/anime/1447/99827.jpg", "https://cdn.myanimelist.net/images/anime/8/79838.jpg", "https://cdn.myanimelist.net/images/anime/1223/96541.jpg", "https://cdn.myanimelist.net/images/anime/1234/102008.jpg", "https://cdn.myanimelist.net/images/anime/1613/102576.jpg"]

var link = ["https://myanimelist.net/anime/38680/Fruits_Basket_1st_Season", "https://myanimelist.net/anime/5678/Kobato", "https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood", "https://myanimelist.net/anime/39195/Beastars", "https://myanimelist.net/anime/38691/Dr_Stone"]

var i = -1

function next(){
  if(i<nome.length-1){
    i++;
  }
  listaNome.innerHTML = `${nome[i]} <br>`
listaLink.innerHTML = `<a href=${link[i]} target="_blank"> 
  <img src= "https://myanimelist.net/images/mal-logo-big.png" class="mal-logo"></a>`
listaCapa.innerHTML = `<img src= ${capa[i]}>`
}

function back(){
  if(i>0){
    i--;
  }
  listaNome.innerHTML = `${nome[i]} <br>`
listaLink.innerHTML = `<a href=${link[i]} target="_blank"> 
  <img src= "https://myanimelist.net/images/mal-logo-big.png" class="mal-logo"></a>`
listaCapa.innerHTML = `<img src= ${capa[i]}>`
}

function adicionarAnime(){
  var animeNome = document.querySelector('#animeNome').value
  var animeLink = document.querySelector('#animeLink').value
  var animeCapa = document.querySelector('#animeCapa').value
  if(animeCapa.endsWith('.jpg')){
    nome.push(animeNome)
    link.push(animeLink)
    capa.push(animeCapa)
    mostrar(animeNome, animeLink, animeCapa)
  }
  else{
    alert("Imagem Inválida")
  }
  document.querySelector('#animeNome').value = ""
  document.querySelector('#animeLink').value = ""
  document.querySelector('#animeCapa').value = ""
}

function mostrar(n, l, c){
  placeNome.innerHTML = `${n} <br>`
  placeLink.innerHTML = `<a href=${l} target="_blank"> 
    <img src= "https://myanimelist.net/images/mal-logo-big.png" class="mal-logo"></a>`
  placeCapa.innerHTML = `<img src= ${c}>`
}
