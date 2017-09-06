//event listener and fetch for our random drink

var form = document.getElementById("dateNite")

form.addEventListener("submit", function(event) {
  event.preventDefault();
  document.getElementsByClassName("drinks")[0].innerHTML=""
  document.getElementsByClassName("dates")[0].innerHTML=""


  fetch("http://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then(function(response){
      return response.json()
      .then(function(drinkContent){
        var imgTag = document.createElement("img");
        var drinkTitle = document.createElement("h2")

        var drinkResults = document.getElementsByClassName("drinks")[0]
        imgTag.setAttribute('src', drinkContent.drinks["0"].strDrinkThumb)
        drinkResults.append(imgTag);
        drinkTitle.innerText= drinkContent.drinks["0"].strDrink
        drinkResults.append(drinkTitle);
      })
    })

fetch("https://randomuser.me/api/")
  .then(function(response) {
    return response.json()
    .then(function(dateContent) {
      var imgTag = document.createElement("img");
      var dateName = document.createElement("a")
      var dateCity= document.createElement("p")
      var dateState=document.createElement("p")
      var dateLastName= document.createElement("a")
      var dateResult = document.getElementsByClassName("dates")[0]
      imgTag.setAttribute('src', dateContent.results["0"].picture.large)
      dateResult.append(imgTag)
      dateName.innerText=dateContent.results["0"].name.first
      dateResult.append(dateName)
      dateLastName.innerText=dateContent.results["0"].name.last
      dateResult.append(dateLastName);
      // dateCity.innerText= dateContent.results["0"].location.city
      // dateResult.append(dateCity)
      // dateState.innerText= dateContent.results["0"].location.state
      // dateResult.append(dateState);

    })
  })

});
