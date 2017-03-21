$(document).ready(function() {
  var output = $('.form-submissions');
  var input = $('form');

  function getTodos() {
    $.ajax({
      type: 'GET',
      dataType: 'json',
      url: 'http://tiny-za-server.herokuapp.com/collections/mattstodos'
    }).then(function(data, status, xhr) {
      data.reverse().forEach(function(item) {
        populateHtml(item)
      })
    })
  }

  function editTodo(item) {
    $.ajax({
      type: 'PUT',
      contentType: 'application/json',
      data: JSON.stringify({
        status: !item.status
      }),
      url: 'http://tiny-za-server.herokuapp.com/collections/mattstodos/' + item._id
    }).then(function(item, status, xhr) {
      populateHtml(item);
    })
  }

  function postTodo(string) {
    $.ajax({
      type: 'POST',
      contentType: 'application/json',
      url: 'http://tiny-za-server.herokuapp.com/collections/mattstodos',
      data: JSON.stringify({
        todo: string,
        status: false
      })
    }).then(function(item, status, xhr) {
      populateHtml(item)
    })
  }

  function deleteTodo(item) {
    $.ajax({
      type: 'DELETE',
      url: 'http://tiny-za-server.herokuapp.com/collections/mattstodos/' + item._id,
    })
  }

  function populateHtml(item) {
    var status = (item.status) ? 'Complete' : 'Incomplete';
    var complete = (item.status) ? 'UNDO' : 'DONE'
    var elementBlock = $(`
      <div class="output-item">
        <div class="item-body-status">
          <p>${item.todo}</p>
          <sub>Status: ${status}</sub>
        </div>
        <div class="buttons">
          <button class="todo-edit" id="${item._id}">${complete}</button>
          <button class="todo-delete" id="${item._id}">DELETE</button>
        </div>
      </div>
    `);

    $(output).prepend(elementBlock)
    var editButton = elementBlock.find('.todo-edit')
    clickEdit(editButton, item)

    var deleteButton = elementBlock.find('.todo-delete')
    clickDelete(deleteButton, item)
  }


  $(input).on('submit', function(e) {
    e.preventDefault();
    var keyString = $('.todo-input').val();
    postTodo(keyString)
  })

  function clickEdit(button, item) {
    $(button).on('click', function(e) {
      editTodo(item);
      $(this).parent().parent().remove();
    });
  }

  function clickDelete(button, item) {
    $(button).on('click', function(e) {
      deleteTodo(item);
      $(this).parent().parent().remove();
    })
  }

  getTodos();
})
