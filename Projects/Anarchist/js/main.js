
/*=========== Scroll Top ===========*/
$('a[href^="#"]').bind('click.smoothscroll',function (e) {
					 e.preventDefault();
					 
					var target = this.hash,
					 $target = $(target);
					 
					$('html, body').stop().animate({
					 'scrollTop': $target.offset().top
					 }, 1000, 'swing', function () {
					 window.location.hash = target;
					 });
					 });
/*=========== Menu ===========*/
$(function menuOpen(){
	$(".menu-icon").click(function(){
		$(".menu-list").toggleClass("active");
		$(".menu-icon").toggleClass("active");
	});
});


/*=========== WOW ===========*/
$(function() {
     
		new WOW().init({
			mobile: false				
	  	});
});
	

			
/*=========== Page ===========*/	
$(function() {
                    $.scrollify({
                        section : ".section",
						easing: "easeOutExpo",
						scrollSpeed: 2000,
                    });
                });
				$(function() {
					$(window).resize(function() {
						if(window.innerWidth < 767){
							$.scrollify.destroy();
						}
						
					});
					$(window).load(function() {
						if(window.innerWidth < 767){
							$.scrollify.destroy();
						}
						
						
					});
                });		
			