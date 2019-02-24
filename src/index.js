document.addEventListener('DOMContentLoaded',function(){

  //GLOBAL VARIABLES-----------------------------------------
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  const breedUrl = "https://dog.ceo/api/breeds/list/all"
  const breedUL = document.querySelector("#dog-breeds")
  const dropDown = document.querySelector("#breed-dropdown")
  let breedData = []

  //FETCH DOG STUFF------------------------------------------
  fetch(imgUrl)
  .then(response => {
    return response.json()
  })
  .then(parsedJSON => {
    imgArray = parsedJSON.message
    imgArray.forEach(dog => {
      renderDog(dog)
    })
  })

  fetch(breedUrl)
  .then(response => {
    return response.json()
  })
  .then(parsedJSON => {
    breedHash = parsedJSON.message
    for(var breed in breedHash){
      renderBreed(breed)
    }
  })

  //EVENT LISTENERS-----------------------------------------
  breedUL.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
      event.target.style.color = "red"
    }
  })

 //  dropDown.onchange = function() {
 //    var firstLetter = dropDown.value
 //    switch (firstLetter) {
 //      case "a":
 //        console.log(a);
 //        break
 //      case "b":
 //        break
 //      case "c":
 //        break
 //      case "d":
 //        break
 //   }
 // }


})


function renderDog(dog){
  dogImgTag = document.createElement("img")
  dogImgTag.setAttribute("src",`${dog}`)
  imgContainer = document.querySelector("#dog-image-container")
  imgContainer.appendChild(dogImgTag)
}

function renderBreed(breed){
  breedUL = document.querySelector("#dog-breeds")
  breedLI = document.createElement("li")
  breedLI.innerHTML = breed
  breedUL.appendChild(breedLI)
}

// function filterBreeds(letter){
//   const filteredBreeds = breedData.filter((breedObject) => {
//     console.log(breedObject.name)
//   })
//   breedLI.innerHTML = renderBreed(filteredBreeds)
// }
