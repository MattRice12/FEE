import app from './app';
import Model from './model';

var view = {
  render: function(view) {
    let $container = $('.container')
    $container.html(view)
  },

  loginView: function() {
    let view = $(`
      <section class="login-page">
        <form class="login-form">
          <label for="username">Input Username</label>
          <input id="username" class="login-input" />
        </form>
      </section>`);
    Model.loginSubmit(view)
    return view
  },

  chatView: function(name, length=0) {
    let view = $(`
      <section class="message-content">
        <div class="chat-output">
        </div>
        <form class="chat-form">
          <input class="chat-input" />
        </form>
      </section>`);

    let output = view.find('.chat-output')
    Model.getMessages(output, name, length)
    Model.messageSubmit(view, name)
    return view;
  },

  rerenderChat: function(output, messages, name) {
		output.html('')
		messages.forEach((message) => {
			let line = $(`<p><bold>${message.name}: </bold>${message.text} </p>`)
			if (name === message.name) {
				line.append('<button class="del">X</button>')
				let delButton = line.find('.del');
				Model.deleteHandler(message, delButton, line);
			}
			output.prepend(line)
		})
  }
}

export default view;
