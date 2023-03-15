import 'regenerator-runtime';
import '../styles/main.css';
import App from './views/app';

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('.navlist'),
  content: document.querySelector('main'),
  jumbotron : document.querySelector('.jumbotron'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});
 
window.addEventListener('load', () => {
  app.renderPage();
});

import('../DATA.json')
.then(({default: jsonData}) => {
  let dataList = jsonData.restaurants
    .map(data => `
      <div class="list_item">
        <img class="list_item_thumb" src="${data.pictureId}" alt="${data.name}" title="${data.name}">
        <div class="city">${data.city}</div>
        <div class="list_item_content">
          <p class="list_item_rating">
            <a href="#" class="list_item_rating_value">${data.rating}</a>
          </p>
          <h1 class="list_item_title"><a href="#">${data.name}</a></h1>
          <div class="list_item_desc">${data.description.slice(0, 150)}...</div>
        </div>
      </div>
    `)
    .join('');
  console.log(jsonData.restaurants)

  document.querySelector('#isi').innerHTML = dataList;
});

