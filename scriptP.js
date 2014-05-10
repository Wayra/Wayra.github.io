var $footer = $('footer');

var $idea1 = $('#idea1'),
	$idea2 = $('#idea2'),
	$idea3 = $('#idea3'),
	$idea4 = $('#idea4'),
	$idea5 = $('#idea5');

var ideas = [$idea1,$idea2,$idea3,$idea4],
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
		
		if(i == ideas.length -1 ){

			$rightB.fadeOut(100,function(){
				$leftB.removeClass('arrow');
				$rightB.removeClass('arrow');
			});
		}
		if(i > 0){

			ideas[i - 1].fadeOut(300,function(){
				ideas[i].fadeIn();
			});

			$rightB.addClass('arrow');
			$leftB.addClass('arrow');
			
			$leftB.fadeIn(20);

			comp = false;
		}

	}else if(target.is($leftB)){	
		console.log(i);
		i -= 1;

		if(i == 0){
			$leftB.fadeOut(500,function(){
				$leftB.removeClass('arrow');
				$rightB.removeClass('arrow');
				$rightB.fadeIn()
			});

		}
		if(i < ideas.length-1){

			$rightB.addClass('arrow');
			$leftB.addClass('arrow');
			
			$rightB.fadeIn();

			ideas[i + 1].fadeOut(300,function(){
			ideas[i].fadeIn();
			});
		}
	}

	return false;
}


$footer.on('click',moveIdeas);
