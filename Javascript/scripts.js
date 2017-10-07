$( ".main" ).hover(
  function() {
    $( this ).parent(this).parent(this).addClass( "hover" );
  }, function() {
    $( this ).parent(this).parent(this).removeClass( "hover" );
  }
);

		if ($(window).width() > 736 ){

             $('.Menu').addClass("invisible");
       }
       else{

       		$('.Menu').removeClass("invisible");
       }



		$(window).resize(function(){     

		       if ($(window).width() > 736 ){

		             $('.Menu').addClass("invisible");

		       }
		       else{

		       		$('.Menu').removeClass("invisible");
		       }

		});

