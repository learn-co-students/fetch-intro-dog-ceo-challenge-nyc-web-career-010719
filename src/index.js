console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

//fetch call to load all images
fetch(imgUrl)
  .then(function(response){
    return response.json()
  })
  .then(function(parsedResponse){
    let parsedArray = parsedResponse.message

    //for each element of the array, create an img tag with its URL
    parsedArray.forEach(function(el){
      const dogImageContainer = document.querySelector('#dog-image-container')
      dogImageContainer.innerHTML += `<img src=${el} >`
    })
  })

//fetch call for the list of breeds
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
fetch(breedUrl)
  .then(function(data){
    return data.json()
  })
  .then(function(parsedData){
    let parsedObject = parsedData.message

    //get the array of just the keys (breeds) from the object
    var keys = []
    for (var key in parsedObject){
      keys.push(key)
    }

    //itterate through that arr to create li tags for each key (breed)
    for (var i=0; i < keys.length; i++) {
      let listContainer = document.querySelector('#dog-breeds')
      listContainer.innerHTML += `<div><li>${keys[i]}</li></div>`
    }

    //event listener on li to change color
    let listContainer = document.querySelector('#dog-breeds')
    listContainer.addEventListener('click', function(e){
      e.target.style.color = "magenta"
    })

    //event listener on dropdown menu to filter by breeds
    let dropDown = document.querySelector('#breed-dropdown')
    dropDown.addEventListener('change', filterBreeds)

    //callback function that is called in event listener to filter breeds
    function filterBreeds(e){
      e.preventDefault();
      if (e.target.value === 'a') {
        let startsWithA = keys.filter((key) => key.startsWith("a"));
        renderFilteredList(startsWithA)
      } else if (e.target.value === 'b') {
          let startsWithB = keys.filter((key) => key.startsWith("b"))
          renderFilteredList(startsWithB)
      } else if (e.target.value === 'c') {
          let startsWithC = keys.filter((key) => key.startsWith("c"))
          renderFilteredList(startsWithC)
      } else if (e.target.value === 'd') {
          let startsWithD = keys.filter((key) => key.startsWith("d"))
          renderFilteredList(startsWithD)
      } else {
        console.log("something")
      }

    }

    //callback function that is called in the filter callback function to take an array of breeds that start with a specific letter and display only those li tags.
    function renderFilteredList(array){
      let listContainer = document.querySelector('#dog-breeds')
      listContainer.innerHTML = ""
      for (var i = 0; i < array.length; i++) {
        listContainer.innerHTML += `<div><li>${array[i]}</li></div>`
      }
    }
  })
