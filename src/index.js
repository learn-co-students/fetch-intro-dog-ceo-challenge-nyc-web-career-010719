console.log('%c HI', 'color: firebrick')
// challenge 1
document.addEventListener("DOMContentLoaded", function(e){
  let allDogs = []
  let dogList = []
  let breed = document.querySelector('#dog-breeds')
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

  fetch(imgUrl)
    .then(function(promisedData){
      return promisedData.json()
    })
    .then(function(parsedJSON){
      let dogImage = document.querySelector('#dog-image-container')
      dogImage.innerHTML = ""
      parsedJSON.message.forEach(function(dogPic){
        dogImage.innerHTML += `<img src="${dogPic}">`
      })
    })
  ///////////////////////////////
  // challenge 2
  fetch(breedUrl)
    .then(function(promisedData){
      return promisedData.json()
    })
    .then(function(parsedJSON){
      breed.innerHTML = ""
      allDogs = parsedJSON
      console.log(allDogs);
      Object.keys(parsedJSON.message).forEach(function(dogBreed){
        dogList.push(dogBreed)
        breed.innerHTML += `<li>${dogBreed}</li>`
      })
      breed.addEventListener("click", function(e){
        e.target.style.color = "red"
      })

    })
  // challenge 3
  ////////////////////////////////
  // challenge 4
  let select = document.querySelector('#breed-dropdown')
  select.addEventListener("change", function(e){
    // match first letter of breed with dropdown
    const letter = e.target.value
    fetch(breedUrl)
      .then(res=>res.json())
      .then(function(data){
        if (letter === 'a') {
          breed.innerHTML = ""
          let dogs = dogList.filter(dog => dog[0] === letter)
          dogs.forEach(function(dog){
            breed.innerHTML += `<li>${dog}</li>`
          })
        }
        if (letter === 'b') {
          breed.innerHTML = ""
          let dogs = dogList.filter(dog => dog[0] === letter)
          dogs.forEach(function(dog){
            breed.innerHTML += `<li>${dog}</li>`
          })
        }
        if (letter === 'c') {
          breed.innerHTML = ""
          let dogs = dogList.filter(dog => dog[0] === letter)
          dogs.forEach(function(dog){
            breed.innerHTML += `<li>${dog}</li>`
          })
        }
        if (letter === 'd') {
          breed.innerHTML = ""
          let dogs = dogList.filter(dog => dog[0] === letter)
          dogs.forEach(function(dog){
            breed.innerHTML += `<li>${dog}</li>`
          })
        }
      })
  })
}) //end of DOMContentLoaded
