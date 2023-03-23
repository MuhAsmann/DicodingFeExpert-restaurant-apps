import UrlParser from "../../routes/url-parser";
import DicodingRestaurantSource from "../../data/restourant-source";
import { createTamplateItemDetail} from '../tamplates/tamplate-creator';
import LikeButtonInitiator from "../../utils/like-button-initiator";
import RestaurantFavorite from "../../data/restourant-favorite";

const Detail = {
  async render() {
    return `
      <div id="detail"></div>
      <div id="likeButtonContainer"></div>
    `;
  },
 
  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await DicodingRestaurantSource.detailRestaurant(url.id);
    const detailContainer = document.querySelector('#detail');
    detailContainer.innerHTML = createTamplateItemDetail(restaurant);

    // const likeButtonContainer = document.querySelector('#likeButtonContainer');
    // likeButtonContainer.innerHTML = createLikeButtonTemplate();
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurantFavorite: RestaurantFavorite,
      restaurant : {
        id: restaurant.id,
        name: restaurant.name,
        pictureId: restaurant.pictureId,
        description: restaurant.description,
        city: restaurant.city,
        rating: restaurant.rating,
      },
    });
  },
};
 
export default Detail;