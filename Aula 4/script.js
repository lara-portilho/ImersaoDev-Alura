var animes = ["Fruits Basket", "Kobato.", "Fullmetal Alchemist Brotherhood", "Beastars", "Dr. Stone"]

var capaAnimes = ["https://cdn.myanimelist.net/images/anime/1447/99827.jpg", "https://cdn.myanimelist.net/images/anime/8/79838.jpg", "https://cdn.myanimelist.net/images/anime/1223/96541.jpg", "https://cdn.myanimelist.net/images/anime/1234/102008.jpg", "https://cdn.myanimelist.net/images/anime/1613/102576.jpg"]

var link = ["https://myanimelist.net/anime/38680/Fruits_Basket_1st_Season", "https://myanimelist.net/anime/5678/Kobato", "https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood", "https://myanimelist.net/anime/39195/Beastars", "https://myanimelist.net/anime/38691/Dr_Stone"]

var i = -1

function next(){
  if(i<animes.length-1){
    i++;
  }
  result1.innerHTML = `${animes[i]} <br>`
  result2.innerHTML = `<a href=${link[i]} target="_blank"> 
    <img src= "https://myanimelist.net/images/mal-logo-big.png" class="mal-logo"></a>`
  result3.innerHTML = `<img src= ${capaAnimes[i]}>`
}

function back(){
  if(i>0){
    i--;
  }
  result1.innerHTML = `${animes[i]} <br>`
  result2.innerHTML = `<a href=${link[i]} target="_blank"> 
    <img src= "https://myanimelist.net/images/mal-logo-big.png" class="mal-logo"></a>`
  result3.innerHTML = `<img src= ${capaAnimes[i]}>`
}
