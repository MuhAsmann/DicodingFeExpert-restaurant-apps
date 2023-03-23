/* eslint-disable no-undef */
const itActsAsrestaurantFavoriteModel = (restaurantFavorite) => {
  it('should return the restaurant that has been added', async () => {
    restaurantFavorite.putRestaurant({ id: 1 });
    restaurantFavorite.putRestaurant({ id: 2 });

    expect(await restaurantFavorite.getRestaurant(1))
      .toEqual({ id: 1 });
    expect(await restaurantFavorite.getRestaurant(2))
      .toEqual({ id: 2 });
    expect(await restaurantFavorite.getRestaurant(3))
      .toEqual(undefined);
  });

  it('should refuse a restaurant from being added if it does not have the correct property', async () => {
    restaurantFavorite.putRestaurant({ aProperty: 'property' });

    expect(await restaurantFavorite.getAllRestaurant())
      .toEqual([]);
  });

  it('can return all of the restaurants that have been added', async () => {
    restaurantFavorite.putRestaurant({ id: 1 });
    restaurantFavorite.putRestaurant({ id: 2 });

    expect(await restaurantFavorite.getAllRestaurant())
      .toEqual([
        { id: 1 },
        { id: 2 },
      ]);
  });

  it('should remove favorite restaurant', async () => {
    restaurantFavorite.putRestaurant({ id: 1 });
    restaurantFavorite.putRestaurant({ id: 2 });
    restaurantFavorite.putRestaurant({ id: 3 });

    await restaurantFavorite.deleteRestaurant(1);

    expect(await restaurantFavorite.getAllRestaurant())
      .toEqual([
        { id: 2 },
        { id: 3 },
      ]);
  });

  it('should handle request to remove a restaurant even though the restaurant has not been added', async () => {
    restaurantFavorite.putRestaurant({ id: 1 });
    restaurantFavorite.putRestaurant({ id: 2 });
    restaurantFavorite.putRestaurant({ id: 3 });

    await restaurantFavorite.deleteRestaurant(4);

    expect(await restaurantFavorite.getAllRestaurant())
      .toEqual([
        { id: 1 },
        { id: 2 },
        { id: 3 },
      ]);
  });
};

export { itActsAsrestaurantFavoriteModel };