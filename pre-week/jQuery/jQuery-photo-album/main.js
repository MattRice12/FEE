$(document).ready(function() {
  var $pages = $('.page-content');
  var $pageAlbums = $('.page-album');
  var $albumContents = $('.album-content');
  var $albums = $('.album');
  var $homePage = $('.home-page')
  var $images = $('.album-content img');

  $pageAlbums.on('click', function(e) {
    e.preventDefault();
    $pages.removeClass('selected')
    $albumContents.removeClass('selected');

    $('#page2').addClass('selected');

    var albumId = e.target.hash || e.target.parentNode.hash;
    $(albumId).addClass('selected');
  })

  $albums.on('click', function(e) {
    e.preventDefault();
    $images.show();

    $albumContents.removeClass('selected');
    $images.removeClass("big-pic");

    var albumId = e.target.hash || e.target.children[0].hash;
    $(albumId).addClass('selected');
  })

  $homePage.on('click', function(e) {
    e.preventDefault();

    $pages.removeClass('selected')
    $images.removeClass("big-pic");
    $images.show();
    var pageId = e.target.hash;
    $('#page1').addClass('selected');
  })

  $images.on('click', function(e) {
    $images.hide();
    $(this).show();
    $(this).addClass("big-pic")
    console.log($(this))
  })
})
