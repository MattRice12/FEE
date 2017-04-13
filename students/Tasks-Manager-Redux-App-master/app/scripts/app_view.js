import postTask from './post_task.js'

export default function appView(store) {
    let state = store.getState()
    // let tasks = store.getState().tasks
    let user = store.getState().user


    // console.log(tasks);

    console.log("This is the appView log");
    let $html = $(`
  <div class="tasks-page">
      <h1 class='app-title'>GTD: Get Tasks Done!</h1>
      <div class="user-welcome">
          <h2>Welcome ${user}<button class="logout-btn" type="button" name="logout">LOG OUT</button></h2>
      </div>
      <div class="input-form">
          <form class="tasks-form">
            <input class="name" type="text" placeholder="task name">
            <input class="description" type="text" placeholder="description">
            <label for="state">Due Date:</label>
            <input class="date" type="date" name="due-date" value="">
            <label for="importance">Important</label>
            <input class="important" type="checkbox" name="important" value="yes">
            <button id="add-task-btn" class="input-btn" name="button">ADD TASK</button>
          </form
      </div>
      <div class="tasks-container">
        <section class="input-form">
          <table class="form-container">
          <tr>
        <col width="1%">
        <col width="24%">
        <col width="40%">
        <col width="15%">
        <col width="20%">
            <td><input type="checkbox" name="state" value=""></td>
            <td>Learn Redux</td>
            <td>store, state, pojo, reducer, views, models</td>
            <td>04/05/17</td>
            <td>Importance</td>
          </tr>

          </table>
      </div>
  </div>
  `)

    var formContainer = $html.find('.form-container');

    store.getState().tasks.forEach((task) => {
        let milliseconds = task.due;
        let date = new Date(milliseconds)
        console.log(task);
        var taskLine = $(`
    <tr>
    <col width="1%">
    <col width="24%">
    <col width="40%">
    <col width="15%">
    <col width="20%">
      <td><input type="checkbox" name="state" value="">${task.state}</td>
      <td>${task.name}</td>
      <td>${task.description}</td>
      <td>${date}</td>
      <td>${task.important}</td>
    </tr>
    `)
        $(formContainer).append(taskLine);
    })


    $html.find('#add-task-btn').on('click', (e) => {
        e.preventDefault()
        let name = $html.find('.name').val();
        let description = $html.find('.description').val();
        let state = false;
        let date = $html.find('.date').val();
        let important = $html.find('.important').is(":checked");
        console.log(important);
        //run post request to server?
        postTask(store, name, description, state, date, important)
        store.dispatch({
            type: "POST_TASK"
            // tasks: {
            //     state: false,
            //     name: $('.name').val(),
            //     description: $('.description').val(),
            //     due: $('.date').val(),
            //     important: $('important').value
            //
            // }
        })
        console.log(store.getState());

    })

    $html.find('.logout-btn').on('click', (e) => {
        store.dispatch({
            type: "LOG_OUT"
            // view: loginView
        })
    })


    return $html;

}
