console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function(event) {

  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  const dropdown = document.querySelector("#breed-dropdown")

  fetch(imgUrl)
    .then(function(response) {
      return response.json()
    })
    .then(function(myJson) {
      myJson["message"].forEach(img => renderDogImage(img))
    })

  fetch(breedUrl)
    .then(function(response) {
      return response.json()
    })
    .then(function(myJson) {
      console.log(myJson)
      let breeds = myJson["message"]
      for (let dogBreed in breeds) {
        renderDogBreed(dogBreed)
      }
      let liAll = document.querySelectorAll("li")
      liAll.forEach(li => {
        li.onclick = changeColor
      })

      dropdown.addEventListener("change", filterBreeds)

      breedArray = Object.keys(breeds)

      function filterBreeds(e) {
        if (e.target.value == "a") {
          let aBreeds = breedArray.filter(b => b[0] == "a")
          renderFilteredBreeds(aBreeds)
        }
        else if (e.target.value == "b") {
          let bBreeds = breedArray.filter(b => b[0] == "b")
          renderFilteredBreeds(bBreeds)
        }
        else if (e.target.value == "c") {
          let cBreeds = breedArray.filter(b => b[0] == "c")
          renderFilteredBreeds(cBreeds)
        }
        else if (e.target.value == "d") {
          let dBreeds = breedArray.filter(b => b[0] == "d")
          renderFilteredBreeds(dBreeds)
        }
      }

      function renderFilteredBreeds(breeds) {
        const dogBreedContainer = document.querySelector("#dog-breeds")
        dogBreedContainer.innerHTML = ""
        breeds.forEach(breed => renderDogBreed(breed))
      }
    })

})


function renderDogImage(img) {
  const dogImageContainer = document.querySelector("#dog-image-container")
  dogImageContainer.innerHTML += `<img src="${img}" />`
}

function renderDogBreed(breed) {
  const dogBreedContainer = document.querySelector("#dog-breeds")
  dogBreedContainer.innerHTML += `<li>${breed}</li>`
}

function changeColor(e) {
  e.target.style.color = "blue"
}
