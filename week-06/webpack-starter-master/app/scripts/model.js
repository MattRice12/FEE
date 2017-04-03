export default function Model (store) {
  const URL = 'http://tiny-za-server.herokuapp.com/collections/mattsstuff';
  const RESTAURANT_URL = 'https://tiy-austin-front-end-engineering.github.io/restaurantApi/fancy.json';

  this.getItems = function () {
    $.ajax({
      type: 'GET',
      url: URL,
      dataType: 'json'
    })
  }

  this.addToCart = function (item, price) {
    $.ajax({
      type: 'POST',
      url: URL,
      contentType: 'application/json',
      data: JSON.stringify({
        user: store.getState().user,
        item: item,
        price: price
      })
    })
  }
}
