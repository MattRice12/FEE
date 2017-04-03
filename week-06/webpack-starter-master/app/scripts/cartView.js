import model from './model';

export default function () {
  const URL = 'http://tiny-za-server.herokuapp.com/collections/mattsstuff';

  let html = $(`
    <div>
      <h1>Your Cart:</h1>
      <ul class="cart-items"></ul>
    </div>
    `)

  let cartItems = $(html).find('.cart-items');
  let totalPrice = 0;

  $.ajax({
    type: 'GET',
    url: URL,
    dataType: 'json'
  }).then((data) => {
    data.forEach((datum) => {
      $(cartItems).append(`<li>${datum.item} -- ${datum.price}</li>`)
      totalPrice += datum.price;
    })
    totalPrice *= 1.08
    $(html).append(`<p>Total: $${parseFloat(totalPrice).toFixed(2)}</p>`)

  })

  return html;
}
