console.log('%c HI', 'color: firebrick')

let array = []

fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(function(rawData){
    console.log(rawData)
    let parsed = rawData.json()
    return parsed
    })
      .then(function(parsed){
        parsed.message.forEach(function(dogLink){
          let dogContainer = document.querySelector('#dog-image-container')

          dogContainer.innerHTML += `<img src=${dogLink}>`
        })
        document.querySelector('#dog-image-container').innerHTML += `<p>Done First Challenge</p>`
      })



      fetch("https://dog.ceo/api/breeds/list/all")
        .then(function(rawData){
          console.log(rawData)
          let parsed = rawData.json()
          return parsed

        .then(function(parsed){
          parsed = parsed.message
          var keys = []
          for (var key in parsed){
            keys.push(key)
            }
            for (let x = 0; x < keys.length; x ++){
            let listContainer = document.querySelector('#dog-breeds')
            listContainer.innerHTML += `<div><li>${keys[x]}</li></div>`
            }
            let listContainer = document.querySelector('#dog-breeds')
            listContainer.addEventListener('click', function(e){
              console.log(e);
              e.target.style.color = "blue"

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
})
           })
