var $button = $('#mas');

 $.get('usuario.json',function(info){
 	var creaciones = info.creaciones;

 	if (creaciones == 0){
 		$('section').prepend('<h2>No tienes creaciones <br>Inicia un proyecto</h2>');
 	}
 	else{
 		
 		$button.remove();
 	}		
 })

