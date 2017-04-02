export default function Model (store) {
  const URL = 'http://tiny-za-server.herokuapp.com/collections/mattschatappmessages';

  this.getEverything = function (user, view) {
    $.getJSON(URL, (messages) => {
      store.dispatch({
        type: "MESSAGES_LOADED",
        messages: messages,
        user: user,
        view: view,
        refresh: true
      });
    });
  };

  this.getMessages = function () {
    $.getJSON(URL, (messages) => {
      store.dispatch({
        type: "GET_MESSAGES",
        messages: messages
      });
    });
  };

  this.postMessages = function (action) {
    $.ajax({
      type: 'POST',
      url: URL,
      contentType: 'application/json',
      data: JSON.stringify({
        name: store.getState().user,
        text: action.message
      })
    }).then((data) => {
      this.getMessages();
    });
  };

  setInterval(reloadPage, 2000);

  function reloadPage() {
    if (store.getState().refresh) {
      $.getJSON(URL, (messages) => {
        if (messages[0]._id !== store.getState().messages[0]._id) {
          store.dispatch({
            type: "GET_MESSAGES",
            messages: messages
          });
        };
      });
    };
  };
};
