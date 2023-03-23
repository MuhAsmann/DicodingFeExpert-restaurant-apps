import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator';
import RestaurantFavorite from '../../src/scripts/data/restourant-favorite';
 
const createLikeButtonPresenterWitRestaurant = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    restaurantFavorite: RestaurantFavorite,
    restaurant,
  });
};
 
export { createLikeButtonPresenterWitRestaurant };