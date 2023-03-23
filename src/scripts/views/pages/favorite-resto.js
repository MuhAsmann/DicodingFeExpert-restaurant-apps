import RestaurantFavorite from "../../data/restourant-favorite"; 
import { createTamplateItem } from "../tamplates/tamplate-creator";
const FavoriteResto = {
  async render() {
    return `
      <div class="latest">
        <h1 class="judul" aria-label="Daftar Restaurant Yang Disukai" tabindex="0">Daftar Resto Disukai</h1>
        <div class="list" id="isi"></div>
      </div>
    `;
  },
 
  async afterRender() {
    const restaurants = await RestaurantFavorite.getAllRestaurant();
    const restaurantsContainer = document.querySelector('#isi');
    
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createTamplateItem(restaurant);
    });
  },
};  
 
export default FavoriteResto;