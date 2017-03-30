import Store from './store.js';
import app from './app.js';
import events from './events.js';

export default function formView(store) {
  let html = $(`
    <div>
      <form>
        <input value="matt" />
        <button>SUBMIT</button>
      </form>
      <div class="output"></div>
    </div>
  `)

  let form   = $(html).find('form');
  let input  = $(html).find('input');
  let output = $(html).find('.output')

  $(form).on('submit', (e) => {
    e.preventDefault();
    let message = input.val()

    $.ajax({
      type: 'POST',
      contentType: 'application/json',
      url: 'http://tiny-za-server.herokuapp.com/collections/mattschatappmessages',
      data: JSON.stringify({ text: message })
    }).then((data) => {
      store.fire(events.FORM_SUBMIT, data.text);
    })
  })

  $.ajax({
    type: 'GET',
    dataType: 'json',
    url: 'http://tiny-za-server.herokuapp.com/collections/mattschatappmessages',
  }).then((messages) => {
    messages.forEach((message) => {
      console.log(message);
      html.find('.output').append(`<p>${message.text}</p>`)
    })
  })



  return html
}
