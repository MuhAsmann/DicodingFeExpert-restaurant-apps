/* eslint-disable no-undef */
import RestaurantFavorite from "../src/scripts/data/restourant-favorite";
import * as TestFactories from './helpers/testFactories';

describe('Liking A Movie', () => {
   const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the movie has not been liked before', async () => {
 
    await TestFactories.createLikeButtonPresenterWitRestaurant({id: 1});
 
    expect(document.querySelector('[aria-label="like this movie"]'))
        .toBeTruthy();
  });

  it('should not show the unlike button when the movie has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWitRestaurant({id:1});
    expect(document.querySelector('[aria-label="unlike this movie"]'))
        .toBeFalsy();
  });

  it('should be able to like the movie', async () => {
    
    await TestFactories.createLikeButtonPresenterWitRestaurant({id:1});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const restaurant = await RestaurantFavorite.getRestaurant(1);
    expect(restaurant).toEqual({ id: 1 });

    RestaurantFavorite.deleteRestaurant(1);
  });

  it('should not add a movie again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWitRestaurant({id:1});
 
    // Tambahkan film dengan ID 1 ke daftar film yang disukai
    await RestaurantFavorite.putRestaurant({ id: 1 });
 
    // Simulasikan pengguna menekan tombol suka film
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
 
    // tidak ada film yang ganda
    expect(await RestaurantFavorite.getAllRestaurant()).toEqual([{ id: 1 }]);
    RestaurantFavorite.deleteRestaurant(1);
  });

  it('should not add a movie when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWitRestaurant({});
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await RestaurantFavorite.getAllRestaurant()).toEqual([]);
  });
});