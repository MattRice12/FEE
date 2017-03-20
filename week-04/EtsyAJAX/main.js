$(document).ready(function() {
  const API_KEY = 'thv67evlrs91gjw9u6ba112h';

  var itemBlock = $('.search-images');
  var searchForm = $('.search-form');

  $(searchForm).on('submit', function(e) {
    e.preventDefault()
    var keyString = $('.key-string').val();
    $(itemBlock).text('Searching....');

    var ajaxFn = function (){
      $.ajax({
        type: 'GET',
        url: `https://api.etsy.com/v2/listings/active.js?api_key=${API_KEY}&keywords=${keyString}&includes=Images,Shop`,
        dataType: 'jsonp',
        success: function(data, status, xhr) {
          $(itemBlock).text('')
          data.results.forEach(function(item) {
            var image = '<img src="' + item.Images[0].url_170x135 + '" />';
            var title = '<h4>' + item.title + '</h4>';
            var thisItem   = '<li><a href="' + item.url + '">' + image + title + '</a></li>';
            $(itemBlock).append(thisItem);
          })
        }
      });
    };

    window.setTimeout(ajaxFn, 0);
  });
});
