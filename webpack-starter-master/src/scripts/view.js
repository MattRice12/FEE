import app from './app';
import Model from './model';

var view = {
  render: function(view) {
    let $container = $('.container')
    $container.append(view)
  },

  loginView: function() {
    let view = $(`
      <section class="login-page">
        <form class="login-form">
          <label for="username">Input Username</label>
          <input id="username" class="login-input" />
        </form>
      </section>`);
    let form = view.find('.login-form')
    Model.loginSubmit(view)
    return view
  },

  chatView: function(name) {
    let view = $(`
      <section class="message-content">
        <div class="chat-output">
        </div>
        <form class="chat-form">
          <input class="chat-input" />
        </form>
      </section>`);
    let output = view.find('.chat-output')
    Model.getMessages(output)
    Model.messageSubmit(view, name)
    return view;
  }
}

export default view;
