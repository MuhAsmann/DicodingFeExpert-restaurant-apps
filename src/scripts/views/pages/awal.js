import DicodingRestaurantSource from '../../data/restourant-source'
import { createTamplateItem } from '../tamplates/tamplate-creator';
const Awal = {
  async render() {
    return `
      <div class="latest">
        <h1 class="judul" aria-label="Daftar Restaurant" tabindex="0">Daftar Restaurant</h1>
        <div class="list" id="isi"></div>
      </div>
    `;
  },
 
  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const restaurant = await DicodingRestaurantSource.listRestaurant();
    console.log(restaurant)
    const container = document.querySelector('#isi');
    restaurant.forEach((restaurants) => {
      container.innerHTML += createTamplateItem(restaurants);
    });
  }, 
};
 
export default Awal;