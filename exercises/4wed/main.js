$('.button').on('click', function() {
  var newButton = '<button class="new-button">IM NEW</button>'
  $('.container').append(newButton)

  button = $('.container').find('.new-button')

  $(button).on('click', function() {
    $(button).hide();
  })
})
