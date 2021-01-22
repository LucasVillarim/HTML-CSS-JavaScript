// const baseURL = "https://api.chucknorris.io/jokes/";
const baseURL = "https://economia.awesomeapi.com.br/json/all";

const body = document.querySelector('#app');

const dataToFetch = [
  {
    id: 1,
    content: 'teste 1',
  },
  {
    id: 2,
    content: 'teste 2',
  },
  {
    id: 3,
    content: 'teste 3',
  },
  {
    id: 4,
    content: 'teste 4',
  }
]

axios.get(baseURL).then(
  res => {
    console.log('Categorias', res.data);

    let AllCategories = res.data;

    let MainCard = Object.keys(AllCategories).map(element => {
      return (`
      <li class="m-5">
        <a href="">${element}</a>
      </li>
      `
      )
    }).join('');
    let list = document.querySelector('#lista');

    list.innerHTML = MainCard;
      
    
  }
);

// axios.get(baseURL + 'random' ).then(
//   res => {
//     console.log(res.data);
//     const FirstCard = `
//       <div class="card m-4" style="width: 18rem;">
//         <img src="${res.data.icon_url}" class="card-img-top" alt="...">
//         <div class="card-body">
//           <p class="card-text">${res.data.value}</p>
//         </div>
//       </div>
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