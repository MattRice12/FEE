export default function (store) {
  let view = $(`
    <div class="landing-view-container">
      <h1>Matt's Chat App</h1>
      <h2>Login</h2>
      <form>
        <input class="login-input" />
        <button class="login-button">Submit</button>
      </form>
    </div>`);

  let loginForm = $(view).find('form');

  $(loginForm).on('submit', function(e) {
    e.preventDefault();

    let username = loginForm.find('.login-input').val()
    store.dispatch({
      type: "LOGIN",
      user: username
    });
  });

  return view;
};
