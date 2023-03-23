/* eslint-disable no-undef */
import { itActsAsrestaurantFavoriteModel } from './contract/favoriteRestaurantContract';
import RestaurantFavorite from '../src/scripts/data/restourant-favorite';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await RestaurantFavorite.getAllRestaurant()).forEach(async (restaurant) => {
      await RestaurantFavorite.deleteRestaurant(restaurant.id);
    });
  });

  itActsAsrestaurantFavoriteModel(RestaurantFavorite);
});