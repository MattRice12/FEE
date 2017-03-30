import Store from './store.js';
import events from './events.js';
import formView from './formView.js';

export default function app() {
  //All of your code starts here

  //Example of the most minimal view possible.
  let defaultView = function() {
    return $(`<div>
      <header>
        <h1>Hello World!</h1>
      </header>
      </div>`)
  }
  let secondView = function() {
    return $(`<h2>Goodbye Cruel World</h2>
    <p>Today I tested a secondView</p>`)
  }

  $(defaultView).on('click', 'h1', function() {
    console.log(defaultView);
    store.fire(events.SHOW_FORM);
  })

  //The default state of this app is nothing, just an empty object.
  //  Don't worry about adding state until you need to keep track of it across views.
  let initialState = {
    view: defaultView,
    text: null
  };

  const store = new Store(initialState);

  const update = function (state, event, data) {
    console.log(`Update was called because the '${event}' event was fired.`);
    if (state === undefined || event === undefined) {
      console.debug("Undefined Event sent to update!");
      return state;

    } else {
      // Your update code goes below here
      console.log(event); //
      console.log(state); //
      switch (event) {

        case events.HELLO_WORLD:
          console.log("HELLO WORLD!");
          //Always return the state;
          return state;

        case events.GOOBYE_WORLD:
          // state.view = secondView
          return Object.assign({}, state, { view: secondView });

        case events.SHOW_FORM:
          return Object.assign({}, state, { view: formView })

        case events.FORM_SUBMIT:
          return Object.assign({}, state, { text: data });

        default: // Your update code goes above here
          console.debug(`Unhandled Event: '${event}'`);
          return;
      }
    }
  };

  const render = function (state, event, data) {
    // You will want to update this render function to render
    $('#app').html(state.view(store));
  };

  // Every time an event is fired the update function will run
  //  and *then* the render function will run after that.

  store.add(update);
  store.add(render);
  render(initialState);
}
