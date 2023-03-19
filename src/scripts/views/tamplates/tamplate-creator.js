import CONFIG from '../../globals/config';


function reviewCustomer(restaurant) {
  return restaurant.customerReviews.map((reviews) => `
  <li class="review">
    <div class="name-review">${reviews.name}</div>
    <div class="description-review">" ${reviews.review} "</div>
    <div class="date-review">${reviews.date}</div>
  </li>
  `).join('');
}

const createTamplateItem  = (restaurant) => `
    <div class="list_item">
        <img class="list_item_thumb" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" title="${restaurant.name}">
        <div class="city">${restaurant.city}</div>
        <div class="list_item_content">
          <p class="list_item_rating">
            <a href="#" class="list_item_rating_value">${restaurant.rating}</a>
          </p>
          <h1 class="list_item_title"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h1>
          <div class="list_item_desc">${restaurant.description.slice(0, 150)}...</div>
        </div>
    </div>
`;

const createTamplateItemDetail = restaurant => `
  <h3 class="restaurant__title">${restaurant.name}</h3>
  <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.title}" />
  <div class="restaurant__info">
    <h3>Information</h3>
    <h4>Alamat</h4>
    <p>${restaurant.address}</p>
    <h4>Kota</h4>
    <p>${restaurant.city}</p>
    <h4>Menu Makanan</h4>
    <p>${restaurant.menus.foods.map((food) => food.name).join(', ')}</p>
    <h4>Menu Minuman</h4>
    <p>${restaurant.menus.drinks.map((food) => food.name).join(', ')}</p>
    <h4>Deskripsi</h4>
    <p>${restaurant.description}</p>
  </div>
  <div class="restaurant__reviews">
    <h3>Riviews</h3>
    <ul>
      ${reviewCustomer(restaurant)}
    </ul>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;
 
const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {createTamplateItem, createTamplateItemDetail, createLikeButtonTemplate, createLikedButtonTemplate};