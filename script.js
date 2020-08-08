const character = document.getElementById('character-Api');

fetch('https://www.breakingbadapi.com/api/characters')
  .then(res => res.json())
  .then(data => {
    const dataStore = data;
    let output = '';
    dataStore.forEach(element => {
      output += `
        <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="${element.img}" alt="Avatar" style="width:200px">
    </div>
    <div class="flip-card-back">
      <h1>Name: ${element.name}</h1>
      <p>Status: ${element.status}</p>
      <p>Portrayed by: ${element.portrayed}</p>
    </div>
  </div>
</div>`
    });

    character.innerHTML = output;
  })


//Tracing the API

const search = document.getElementById('searchBox');
search.addEventListener('keyup', trace);

function trace() {
  fetch('https://www.breakingbadapi.com/api/characters')
    .then(res => res.json())
    .then(data => {
      let matches = data.filter(character => {
        const regex = new RegExp(`^${search.value}`, 'gi');
        return character.name.match(regex);
      });

      let output = '';
      matches.forEach(element => {
        output += `<div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src="${element.img}" alt="Avatar" style="width:200px">
            </div>
            <div class="flip-card-back">
              <h1>Name: ${element.name}</h1>
              <p>Status: ${element.status}</p>
              <p>Portrayed by: ${element.portrayed}</p>
            </div>
          </div>
        </div>
          `
      });
      character.innerHTML = output;

    })
}