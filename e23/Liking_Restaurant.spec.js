/* eslint-disable no-undef */
const assert = require('assert');

Feature('Favoriting Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('favoriting one restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.wait(3);

  I.seeElement('.list_item_title');

  const firstResto = locate('.list_item_title a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);
  I.wait(3);

  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.wait(3);

  I.amOnPage('/#/favorite');
  I.wait(3);
  I.seeElement('.list_item');
  const favoritedRestoTitle = await I.grabTextFrom('.list_item_title a');

  assert.strictEqual(firstRestoTitle, favoritedRestoTitle);
});

Scenario('unfavoriting one restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.wait(3);

  I.seeElement('.list_item_title');

  const firstResto = locate('.list_item_title a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);
  I.wait(3);

  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.wait(3);

  I.amOnPage('/#/favorite');

  I.wait(3);

  I.seeElement('.list_item_title a');
  const firstRestolike = locate('.list_item_title a').first();
  const favoritedRestoTitle = await I.grabTextFrom(firstRestolike);
  assert.strictEqual(firstRestoTitle, favoritedRestoTitle);
  
  I.click(firstRestolike);
  I.wait(10);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.wait(3);
  I.amOnPage('/#/favorite');

  I.dontSeeElement('.list_item_title a');
});