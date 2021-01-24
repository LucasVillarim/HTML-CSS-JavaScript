const baseURL = "https://api.chucknorris.io/jokes/";
const searchURL = 'https://api.chucknorris.io/jokes/search?query=';

const body = document.querySelector('#app');

function card(joke) {
  const cardTemplate = 
  `
  <div class="card col-md-3 col-lg-3 m-3" style="width: 18rem;">
    <div class="card-body">
      <div class="d-flex align-items-center">
        <img src="${joke.icon_url}" alt="icone" />
        <h5 class="card-title ml-3">Jokes</h5>
      </div>
      <p class="card-text">${joke.value}</p>
      <a href="${joke.url}" class="card-link text-uppercase fw-bold">Ver no Site</a>
    </div>
  </div>
  `
  return cardTemplate;
}

// Search by category;
function handleCategory(element) {
  axios.get(baseURL + "search?query=" + element).then(res => {
    console.log(res);
    const selectedCategory = res.data.result.map(joke => card(joke)).join('');
    body.innerHTML = selectedCategory;
  })
}

axios.get(baseURL + "categories").then(res => {
  const options = res.data.map(name => {
    const button = `<button class="category-button btn btn-primary m-2" type="button" onclick="handleCategory('${name}')">
                      ${name}
                    </button>
                  `;
    return button;
  }).join('');
    const menu = document.getElementById('menu');
    menu.innerHTML = options;
});
  
// Input Search;
const sendSearch = document.getElementById('sendForm');
sendSearch.addEventListener('click', () => {
  const input = document.getElementById('inputSearch').value;
  axios.get(`${searchURL}${input}`).then(res => {
    const searchReturn = res.data.result.map(joke => card(joke)).join('');
    body.innerHTML = searchReturn;
  });
});

  
// axios.get(baseURL).then(
//   res => {
//     console.log('Categorias', res.data);

//     let AllCategories = res.data;

//     let MainCard = AllCategories.map(element => {
//       return (`
//       <div class="card m-3">
//         <li class="m-5">
//           <a href="">${element}</a>
//         </li>
//       </div>
//       `
//       )
//     }).join('');
//     let list = document.querySelector('#lista');

//     list.innerHTML = MainCard;
      
//   }
// );

// axios.get(baseURL + 'random' ).then(
//   res => {
//     console.log(res.data);
//     const FirstCard = `
//       < class="card m-4" style="width: 18rem;">
//         <img src="${res.data.icon_url}" class="card-img-top" alt="...">
//         <div class="card-body">
//           <p class="card-text">${res.data.value}</p>
//         </div>
//       </>
//     `;

//     body.innerHTML = FirstCard;
//   }
// );

// const MainDefault = `
//   <li>
//     <a href="">1234</a>
//   </li>
// `;


// function FindJokes() {
//   let InputJokeValue = document.getElementById('joke-value')
//   axios.get( baseURL + 'search?query= ' + InputJokeValue ).then()
// }

// const MainCard = `

// `;