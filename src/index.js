var DOGS = []
document.addEventListener("DOMContentLoaded", () => {
  fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(function(promisedData) {
    return promisedData.json()
  }).then(function(parsedJSON) {
    parsedJSON.message.forEach(function(img) {
      imageContainer = document.querySelector("#dog-image-container")
      image = document.createElement("img")
      image.src = img
      imageContainer.appendChild(image)
    })
  })



  fetch("https://dog.ceo/api/breeds/list/all")
  .then(function(p) {
    return p.json()
  }).then(function(parsed) {
    for (var ele in parsed.message) {
      breed = document.createElement("ul")
      breed.innerText = ele
      DOGS.push(ele)
      breedContainer.appendChild(breed)
    }
  })

  const breedContainer = document.querySelector("#dog-breeds")
  breedContainer.addEventListener("click", function(e){
    console.log(e.target.innerHTML)
    e.target.style.color = '#d00'
  })
  let input = document.querySelector("#breed-dropdown");
  input.addEventListener("input", filterDogs);

});


function filterDogs(e) {
  const filteredDogs = DOGS.filter(function(dog) {
    return dog[0] === e.target.value;
  });
  const breedContainer = document.querySelector("#dog-breeds")

  breedContainer.innerHTML = ""
  for (var ele in filteredDogs) {

    breed = document.createElement("ul")
    breed.innerText = filteredDogs[ele]
    breedContainer.appendChild(breed)
  }
}
