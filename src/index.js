console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", function(event) {
breedDrop();
 });


let imgContainer = document.querySelector('#dog-image-container')

fetch("https://dog.ceo/api/breeds/image/random/4", {method: "GET"})
  .then (function(response){
    return response.json();
  })
  .then(function(parsedJson){
    console.log(JSON.stringify(parsedJson));
    let dogUrlList = parsedJson.message
    showDogs(dogUrlList)
  });

//
function showDogs(array) {
  let imgContainer = document.querySelector('#dog-image-container')
  array.forEach(function(e){
    imgContainer.innerHTML += `<img src=${e}>`
  })
}

const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let breedKeys = []
fetch(breedUrl)
  .then(function(response){
    return response.json();
  })
  .then(function(parsedJson){
    let breedObj = parsedJson.message
    showBreeds(breedObj)
    });

  function showBreeds(breedObj){
    let breedID = document.querySelector('#dog-breeds')
    breedArray = [];
    for (var breed in breedObj) {
      breedArray.push(breed)
      breedID.innerHTML += `<li style="color:red"> ${breed} </li>`
      breedID.addEventListener("click", function(e){
        e.target.style = "color:black"
      })
    }
  }
    function breedDrop(){
    let breedID = document.querySelector('#dog-breeds')
    let breedDropDown = document.querySelector('#breed-dropdown')
    breedDropDown.addEventListener("change", function(e){
      e.preventDefault()
      if (e.target.value == "a") {
        filterBreedArray = breedArray.filter((dog) => dog[0]== "a")
        breedArray.forEach(function(dog){
          breedID.innerHTML = ""
        })
        filterBreedArray.forEach(function(dog){
          breedID.innerHTML += `<li style="color:red"> ${dog} </li>`
        })
      } // end of if statement
      else if (e.target.value == "b") {
        filterBreedArray = breedArray.filter((dog) => dog[0]== "b")
        breedArray.forEach(function(dog){
          breedID.innerHTML = ""
        })
        filterBreedArray.forEach(function(dog){
          breedID.innerHTML += `<li style="color:red"> ${dog} </li>`
        })
      } // end of if statement
      else if (e.target.value == "c") {
        filterBreedArray = breedArray.filter((dog) => dog[0]== "c")
        breedArray.forEach(function(dog){
          breedID.innerHTML = ""
        })
        filterBreedArray.forEach(function(dog){
          breedID.innerHTML += `<li style="color:red"> ${dog} </li>`
        })
      } // end of if statement
      else if (e.target.value == "d") {
        filterBreedArray = breedArray.filter((dog) => dog[0]== "d")
        breedArray.forEach(function(dog){
          breedID.innerHTML = ""
        })
        filterBreedArray.forEach(function(dog){
          breedID.innerHTML += `<li style="color:red"> ${dog} </li>`
        })
      } // end of if statement
      }) // end of event listener
    } //end of function
