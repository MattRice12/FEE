export default function (store) {
  function render () {
    let messageBlock = $(`<div class="messages"></div>`);
    let messages = store.getState().messages;

    messages.forEach((message) => {
      messageBlock.append(`<p>${message.name}: ${message.text}</p>`);
    });

    let view = $(`
      <div class="chat-view-container">
        <h1>Matt's Chat App</h1>
        <h2>Write a message</h2>
        <form>
          <input class="message-input" />
          <button class="message-submit">Submit</button>
        </form>
        <div class="chats-container">${messageBlock.html()}</div>
      </div>
    `);

    view.find('form').on('submit', (e) => {
      e.preventDefault();
      let message = view.find('input');
      let container = view.find('.chats-container');
      store.dispatch({
        type: "POST_MESSAGE",
        message: message.val()
      });

      $(message).val('');
    });
    return view;
  }

  return render();
};
