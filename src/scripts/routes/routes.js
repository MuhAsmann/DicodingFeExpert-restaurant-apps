import Awal from '../views/pages/awal';
import Favorite from '../views/pages/favorite';
import Detail from '../views/pages/detail';
 
const routes = {
  '/': Awal, // default page
  '/dashboard': Awal,
  '/favorite': Favorite,
  '/detail/:id': Detail,
};
 
export default routes;