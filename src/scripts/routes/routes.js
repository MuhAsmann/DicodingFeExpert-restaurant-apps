import Awal from '../views/pages/awal';
import Detail from '../views/pages/detail';
import FavoriteResto from '../views/pages/favorite-resto';
 
const routes = {
  '/': Awal, // default page
  '/dashboard': Awal,
  '/detail/:id': Detail,
  '/favorite' : FavoriteResto,
};
 
export default routes;