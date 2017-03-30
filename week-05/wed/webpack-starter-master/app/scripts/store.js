// Our store keeps track of our app's state
//  and a list of subscribers to update whenenver an event is fired.
export default function Store(startingState) {
  let subscribers = []; // only 2 functions: `update` and `render`
  let state = startingState;

  this.getState = function () {
    return state;
  }

  this.fire = function(event, data) {
    subscribers.forEach(function (sub){
      //Update the app's state to whatever the update function returns.
      var newState = sub(state, event, data) // sub is each `update(state, event, data)` and `render(state, event, data)`
      if (newState !== undefined && newState !== null) {
        state = newState; // this sets the state in `update` (return {view: xyz}) and runs `render` ($(#app).html(...))
      }
    });
  }

  this.add = function (newSubscriber) { // this adds the state I set
    subscribers.push(newSubscriber); // pushes `update` and `render`
  }
}

// 1) .add `update` and `render` --> pushes it into *subscribers array*
// 2) .fire event with *event_name*
// 3) this runs both subscribers, each with (state, event, data)
//    a) `update`: *newState* is determined by the *event_name*, and state now equals newState
//    b) `render`: state is preserved, event and data are ignored; the render block is just runs, updating the html with the newly defined state
