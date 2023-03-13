import 'regenerator-runtime';
import '../styles/main.css';

// burger menu
const menu = document.querySelector('#menu');
const jumbotron = document.querySelector('.jumbotron');
const main = document.querySelector('main');
const navList = document.querySelector('.navlist');

menu.addEventListener('click', function (event) {
    navList.classList.toggle('open');
    event.stopPropagation();
});

jumbotron.addEventListener('click', function () {
    navList.classList.remove('open');
});

main.addEventListener('click', function () {
    navList.classList.remove('open');
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

  document.querySelector('#isi').innerHTML = dataList;
});

