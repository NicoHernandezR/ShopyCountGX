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
			filtro.forEach(fil => {
				fil.style.padding-top; '3%';
				fil.style.background; 'rgba( 0, 0, 0, 1)';
			  });

			contador = 0;
		} else {
			contador = 1;
			$('#nv').animate({
				right: '-100%'
			});
			document.getElementById('l').style.display = "none"
			filtro.forEach(fil => {
				fil.style.padding-top; '0%';
				fil.style.background; 'none';
			  });


		}

	});

};