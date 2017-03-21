$(document).ready(function() {
  const API_KEY = 'thv67evlrs91gjw9u6ba112h';
  var region = "";

  var itemBlock = $('.search-images');
  var searchForm = $('.search-form');
  var keyString;

  $(searchForm).on('submit', function(e) {
    e.preventDefault()
    var keyString = $('.key-string').val();
    $(itemBlock).text(`Searching "${keyString}"...`);

    var url = `https://api.etsy.com/v2/listings/active.js?api_key=${API_KEY}&keywords=${keyString}&includes=Images,Shop`
    url = addParams(url, region)

    $.ajax({
      type: 'GET',
      url: url,
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
  });


  $('.region-radio').on('click', function(e) {
    region = e.target.value
  })

  function addParams(url, region) {
    if (region) {
      url += `&region=${region}`
    }
    return url
  }
});

// https://api.etsy.com/v2/listings/active.js?api_key=thv67evlrs91gjw9u6ba112h&keywords=bears&includes=Images,Shop&region=US
