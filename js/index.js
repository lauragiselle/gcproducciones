//////////////////////// IMAGENES ///////////////////////////
$(".hover").mouseleave(
  function() {
    $(this).removeClass("hover");
  }
);

// PRUEBA
$(window).on('scroll', retraerMenu);

		function retraerMenu(){
			var scrollRealizado = $(window).scrollTop()
			console.log(scrollRealizado);

			// chequear posicion del escroll y reducir menu
			if(scrollRealizado>50){
				$('.menu-r').addClass('retractil');
			}else{
				$('.menu-r').removeClass('retractil');			
			}
		}