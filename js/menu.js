$(document).ready(main);

var contador = 1;
var filtro = document.querySelectorAll('.rightcol')

function main(){
	$('.menu_bar').click(function(){
		// $('nv').toggle(); 

		if(contador == 1){
			$('#nv').animate({
				right: '0'
			});
			document.getElementById('l').style.display = "block"


			contador = 0;
		} else {
			contador = 1;
			$('#nv').animate({
				right: '-100%'
			});
			//document.getElementById('l').style.display = "none"



		}

	});

};

