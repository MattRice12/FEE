import model from './model';

export default function (store) {
  const RESTAURANT_URL = 'https://tiy-austin-front-end-engineering.github.io/restaurantApi/fancy.json';

  let html = $(`
    <div>
      <button class="cart-button">Go To Cart</button>
      <h1>Menu</h1>
      <div class="categories">
      </div>
    </div>
    `);

  let cats = $(html).find('.categories');
  $(cats).html(`
    <ul class="apps"><h1>Appetizers</h1></ul>
    <ul class="entrees"><h1>Entrees</h1></ul>
    <ul class="sides"><h1>Sides</h1></ul>
    `);

  let apps    = cats.find('.apps')
  let entrees = cats.find('.entrees')
  let sides   = cats.find('.sides')

  $.ajax({
    type: 'GET',
    url: RESTAURANT_URL,
    dataType: 'json'
  }).then((data) => {
    appendItems(data.appetizers, apps);
    appendItems(data.entrees,    entrees);
    appendItems(data.sides,      sides);
  })

  function appendItems(category, elem) {
    category.forEach((food) => {
      var foodItem = $(`
        <li class="item">
          <div><bold>$${parseFloat(food.price).toFixed(2)}</bold> -- ${food.item}</div>
          <div>
            <button class="add-to-cart">Add To Cart</button>
          </div>
        </li>`)
      $(elem).append(foodItem)

      $(foodItem.find('.add-to-cart')).on('click', () => {
        store.dispatch({ type: 'ADD_TO_CART', item: food.item, price: food.price })
      })
    })
  }

  let cartButton = $(html).find('.cart-button');
  $(cartButton).on('click', () => {
    store.dispatch({ type: 'GO_TO_CART' })
  })

  return html
}
