/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
// import RestaurantFavorite from '../data/restourant-favorite';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/tamplates/tamplate-creator';
 
const LikeButtonInitiator = {
  async init({ likeButtonContainer, restaurantFavorite, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurantFavorite = restaurantFavorite;
    this._restaurant = restaurant;
 
    await this._renderButton();
  },
 
  async _renderButton() {
    const { id } = this._restaurant;
 
    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },
 
  async _isRestaurantExist(id) {
    const restaurant = await this._restaurantFavorite.getRestaurant(id);
    return !!restaurant;
  },
 
  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();
 
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._restaurantFavorite.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },
 
  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();
 
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._restaurantFavorite.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};
 
export default LikeButtonInitiator;