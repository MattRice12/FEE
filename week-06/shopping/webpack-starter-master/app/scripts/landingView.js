export default function (store) {
  let html = $(`
    <div>
      <form class="login-form">
        Welcome! Please Sign In!

        <div class="form-fields">
          <label for="login">Username:</label>
          <input id="login" />
        </div>

        <div class="form-fields">
          <label for="password">Password:</label>
          <input id="password" type="password" />
        </div>
        <button>Submit</button>
      </form>
    </div>
    `)

  $(html).find('form').on('submit', (e) => {
    e.preventDefault();
    store.dispatch({ type: 'LOGIN' })
  });

  return html;
}
