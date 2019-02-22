console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function() {

  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  const dogDiv = document.querySelector('#dog-image-container')
  const dogUl = document.querySelector('#dog-breeds')
  const dogDD = document.querySelector('#breed-dropdown')

  fetch(imgUrl)
    .then(function(response) {
      return response.json()
    })
    .then(function(urlJson) {
      const imgTxt = urlJson.message
      // console.log(imgTxt)
      for (const img of imgTxt) {
        // console.log(img)
        dogDiv.innerHTML += `<img src='${img}'></img>`
      }
    })

  fetch(breedUrl)
    .then(function(response) {
      return response.json()
    })
    .then(function(urlJson) {
      const imgTxt = urlJson.message
      // console.log(imgTxt)
      let dogList = []
      for (const img in imgTxt) {
        // console.log(imgTxt[img])
        if (imgTxt[img].length === 0) {
          dogList.push(img);
        } else {
          for (const dog of imgTxt[img]) {
            const dogBreed = `${dog} ${img}`
            dogList.push(dogBreed)
          }
        }
      }
      // console.log(dogList)
      for (const dog of dogList) {
        dogUl.innerHTML += `<li data-action="color">${dog}</li>`
      }
    })
  dogUl.addEventListener('click', textChangeOnClick);

  dogDD.addEventListener('change', filterBreed );
})

function textChangeOnClick(e) {
  // console.log(e.target)
  if (e.target.dataset.action === 'color') {
    e.target.style.color = "magenta"
  }
}

function filterBreed(e) {
  e.preventDefault();
  console.log("I've been clicked")
  const letter = e.target.value
  const dogUl = document.querySelector('#dog-breeds')
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  dogUl.innerHTML = ""
  fetch(breedUrl)
    .then(function(response) {
      return response.json()
    })
    .then(function(urlJson) {
      const imgTxt = urlJson.message
      // console.log(imgTxt)
      let dogList = []
      for (const img in imgTxt) {
        // console.log(imgTxt[img])
        if (imgTxt[img].length === 0 && img.startsWith(letter)) {
          dogList.push(img);
        } else {
          for (const dog of imgTxt[img]) {
            const dogBreed = `${dog} ${img}`
            if (dogBreed.startsWith(letter)) {
              dogList.push(dogBreed)
            }
          }
        }
      }
      // console.log(dogList)
      for (const dog of dogList) {
        dogUl.innerHTML += `<li data-action="color">${dog}</li>`
      }
    })
}
