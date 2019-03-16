// JavaScript Document
$(function(){
	 $(".water-sections-sect").click(function(){
                $(".water-sections-sect").removeClass('active'); 
				$(this).addClass('active');
					if($(".morshin1").hasClass('active')){
						$(".water-list").removeClass('active');
						$(".water-image-img").removeClass('active');
						$(".morshin2").addClass('active');
						$(".water-image-img_1").addClass('active');
					}else if($(".mrigorod1").hasClass('active')){
						$(".water-list").removeClass('active');
						$(".water-image-img").removeClass('active');
						$(".mrigorod2").addClass('active');
						$(".water-image-img_2").addClass('active');
					}else if($(".pristan1").hasClass('active')){
						$(".water-list").removeClass('active');
						$(".water-image-img").removeClass('active');
						$(".pristan2").addClass('active');
						$(".water-image-img_3").addClass('active');
					}
            });
	});	
	
//===========================================================================//

(function($) {
	$(function() {

  		$('input, select').styler();

	});
})(jQuery);

/*
(function($) {
	$(function() {

  		$('.selectnosearch').stylernosearch();

	});
})(jQuery);
*/

//===========================================================================//

  
$(function openSertifacations(){
	 $(".sertifitions-items-title").click(function(){
		 if(window.innerWidth < 768){
			$(".sertifitions-items-mob").slideToggle(1000); 
	
		}
                
     });
	 
	 $(".sertifitions-items-mob").click(function(){
		 if(window.innerWidth < 768){
			$(".sertifitions-items-mob").slideUp(1000); 
	
		}
                
     });
});	

//===========================================================================//

$(function(){
	 $(".menu").click(function(){
		 if(window.innerWidth < 768){
			$(".menu-list").toggleClass('active');
			$(".overflowbl").fadeTo( "fast" , 1, function(){
				// Animation complete.
			  });
			$(".overflowbl").attr("style","display:block");
	
	
		}               
     });
	 $(".overflowbl").click(function(){
		 if(window.innerWidth < 768){
			$(".menu-list").removeClass('active');
			$(".overflowbl").fadeTo( "slow" , 0, function(){
				$(".overflowbl").attr("style","display:none");
			  });
			 
	
		}               
     });

});


//===========================================================================//

$(function(){
	 $(".header-lengs-leng").click(function(){
		  $(".header-lengs-leng").removeClass('active');
		  $(this).addClass('active');           
     });
});

//===========================================================================//
$('document').ready(function(){
	jQuery('input, textarea').placeholder();
});

