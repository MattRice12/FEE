$(document).ready(function() {
  var output = $('.form-submissions');
  var input = $('form');
  getTodos();

  function getTodos() {
    $.ajax({
      type: 'GET',
      dataType: 'json',
      url: 'http://tiny-za-server.herokuapp.com/collections/mattstodos'
    }).then(function(data, status, xhr) {
      data.forEach(function(item) {
        var deleteButton = '<button class="todo-delete" id="' + item._id + '">DELETE</button>'
        $(output).append('<div class="output-item"><p>' + item.todo + '</p>' + deleteButton + '</div>')
      })
    })
  }

  $(input).on('submit', function(e) {
    e.preventDefault();
    var keyString = $('.todo-input').val();

    $.ajax({
      type: 'POST',
      contentType: 'application/json',
      url: 'http://tiny-za-server.herokuapp.com/collections/mattstodos',
      data: JSON.stringify({
        todo: keyString
      })
    }).then(function(data, status, xhr) {
      var deleteButton = '<button class="todo-delete" id="' + data._id + '">DELETE</button>'
      $(output).prepend('<div class="output-item"><p>' + data.todo + '</p>' + deleteButton + '</div>')
    })
  })




  $('.form-submissions').on('click', '.todo-delete', function(e) {
    var id = $(this).attr('id')
    console.log($(this).parent().html())
    console.log($(this).parent())
    $.ajax({
      type: 'DELETE',
      url: 'http://tiny-za-server.herokuapp.com/collections/mattstodos/' + id,
    })
    $(this).parent().remove()
  })

})
