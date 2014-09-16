var $menu_bar = $('#bar-button'),
    $nav 	  = $('#navegador');

function showNav()
{
	$nav.slideToggle(300);
	console.log('hola');

	return false;
}

$menu_bar.on('click',showNav);
