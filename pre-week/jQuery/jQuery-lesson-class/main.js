// on a click of tab element
var $tabs = $('.tab');
$tabs.on('click', function(e) {
	e.preventDefault();

	var $tabContents = $('.tab-content');
	$tabContents.removeClass('selected');

  console.dir(e.target)

	var tabId = e.target.hash; //#tab1
	$(tabId).addClass('selected');
})
