const baseURL = "https://api.chucknorris.io/jokes/";

const body = document.querySelector('#app');

function card() {

}

function handleCategory(element) {
  // const config = {headers: {'Access-Control-Allow-Origin': '*'}};
  axios.get(baseURL + "search?query=" + element).then(res => {
    console.log(res);
    const selectedCategory = res.data.result.map(joke => {
      const cardTemplate = 
      `
      <div class="card col-md-3 col-lg-3 m-3" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p class="card-text">${joke.value}</p>
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>
      `  
      return cardTemplate;
    })
    body.innerHTML = selectedCategory;
  })
}




axios.get(baseURL + "categories").then(res => {
  const options = res.data.map(name => {
    const button = `<button class="btn btn-primary m-2" type="button" onclick="handleCategory('${name}')">${name}</button>`
    return button;
  }).join('');
    const menu = document.getElementById('menu');
    menu.innerHTML = options;
  })
  
  
  
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