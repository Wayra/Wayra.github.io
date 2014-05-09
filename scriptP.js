var $footer = $('footer');

var $idea1 = $('#idea1'),
	$idea2 = $('#idea2');

var ideas = [$idea1,$idea2],
	comp  = true,
	i 	  =  0;

var $leftB = $('footer div:first-child'),
	$rightB = $('footer div:last-child');


//functions

function moveIdeas()
{	
	var target = $(event.target);

	if(target.is($rightB)){
		i += 1;
		if(i > 0){

			ideas[i - 1].fadeOut('slow',function(){
				ideas[i].fadeIn();
			});

			$rightB.addClass('arrow');

			$leftB.fadeIn();
			$leftB.addClass('arrow');

			comp = false;
		}
	}else if(target.is($leftB)){	
		console.log(i);
		i -= 1;

		ideas[i + 1].fadeOut('slow',function(){
			ideas[i].fadeIn();
		});
		if(i == 0){
			$leftB.fadeOut();
			$leftB.removeClass('arrow');

			$rightB.removeClass('arrow');
		}

	}
	return false;
}


$footer.on('click',moveIdeas);
