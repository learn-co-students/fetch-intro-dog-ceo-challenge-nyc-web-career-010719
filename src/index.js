
document.addEventListener('DOMContentLoaded', function(e) {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  const imgContainer = document.querySelector("#dog-image-container");
  const breedList = document.querySelector("#dog-breeds");
  const dropdown = document.querySelector('#breed-dropdown');
  let allBreeds =[];
  let filteredBreeds = [];

  breedList.addEventListener("click", e => {
    e.target.style.color = 'green';
  });

  dropdown.addEventListener("change", e => {
    filteredBreeds = allBreeds.filter(d => {
      return d[0] === e.target.value;
    });

    breedList.innerHTML = "";
    filteredBreeds.forEach(d => {
      displayBreed(d);
    });
  });

  function populate() {
    fetch(imgUrl)
      .then(response => response.json())
      .then(parsedResp => {
        parsedResp.message.forEach(url => {
          imgContainer.innerHTML += `<img src="${url}" width="250px"/>`
      });
    });

    fetch(breedUrl)
    .then(response => response.json())
    .then(dogs => {
      breedList.innerHTML = "";
      Object.keys(dogs.message).forEach(d => {
        displayBreed(d);
        allBreeds.push(d);
      });
    })
  };

  function displayBreed(dog) {
    breedList.innerHTML += `
      <li>${dog}</li>
    `;
  };

  populate();
});
