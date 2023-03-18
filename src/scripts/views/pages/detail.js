import UrlParser from "../../routes/url-parser";
import DicodingRestaurantSource from "../../data/restourant-source";
import { createTamplateItemDetail } from '../tamplates/tamplate-creator';

const Detail = {
  async render() {
    return `
      <div id="detail"></div>
    `;
  },
 
  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await DicodingRestaurantSource.detailRestaurant(url.id);
    const detailContainer = document.querySelector('#detail');
    detailContainer.innerHTML = createTamplateItemDetail(restaurant);
  },
};
 
export default Detail;