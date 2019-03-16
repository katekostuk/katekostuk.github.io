function setEqualHeight(columns){
	if(window.innerWidth > 767){
	var tallestcolumn = 0;
	
	columns.css('height', '');
	columns.each(
		function(){
	currentHeight = $(this).outerHeight();
	if(currentHeight > tallestcolumn){
			tallestcolumn = currentHeight;
			}
		}
	);
	columns.height(tallestcolumn);
	}else{
		$('.product-item-title, .product-item-info').removeAttr('style');	
	}
}
function hideHeaderprodchoose() {
		$(window).scroll(function(){
			if( $(window).scrollTop() < 5) {
				$('.rocket').removeClass('finish fly swing');
				$('.smoke, .rocket_text').removeClass('finish hide');
			}else if( $(window).scrollTop() > 110 && $(window).scrollTop() < 160) {
				$('.rocket').addClass('swing');
			}else if( $(window).scrollTop() > 160 && $(window).scrollTop() < 820) {
				$('.rocket').removeClass('swing');
				$('.rocket').addClass('fly');
				$('.smoke, .rocket_text').addClass('hide');
			}else if( $(window).scrollTop() > 820) {
				$('.rocket').addClass('finish');
				$('.rocket').removeClass('fly');
				$('.smoke, .rocket_text').addClass('finish');
				$('.smoke, .rocket_text').removeClass('hide');
			}
		});
}

function slideMePleasePrettyPlease(){
	$('a.anchoreto[href^="#"]').bind('click.smoothscroll',function (e) {
		e.preventDefault();
					 
		var target = this.hash,
		$target = $(target);
					 
		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
			}, 500, 'swing', function () {
			window.location.hash = target;
		});
	});
}


function form(){
	$(".js-sendform").click(function () {
      $(this).parents('.js-form').find('.formfields').hide();
	  $(this).parents('.js-form').find('.formsend').show();
	});
	$(".js-closeform").click(function () {
      $(this).parents('.js-form').find('.formfields').show();
	  $(this).parents('.js-form').find('.formsend').hide();
	});
	$(".js-closefixform").click(function () {
      $(this).parents('.js-form').find('.formfields').show();
	  $(this).parents('.js-form').find('.formsend').hide();
	  $('.js-inform').hide().removeClass('js--callback js--orderproduct');
	  $('.sitefixform').animate({opacity: 0},500, function() {
    		$(this).hide().removeClass('h420');
  		});
	  $('.overlay').hide();
	});
}
function overlay(){
	$(".overlay").click(function () {
	  $('.sitefixform').animate({opacity: 0},500, function() {
    		$(this).hide().removeClass('h420');
  		});
	  $('.overlay').hide();
	  $('.js-inform').hide().removeClass('js--callback js--orderproduct');
	});
}
function order(){
	$(".js-ordercall").click(function () {
	  $('.sitefixform').show().animate({opacity: 1},500);
	  $('.callbackform').show().addClass('js--callback');
	  $('.overlay').show();
	});
	
	$(".js-orderproduct").click(function () {
	  $('.sitefixform').show().animate({opacity: 1},500);
	  $('.callbackform').show().addClass('js--orderproduct');
	  $('.overlay').show();
	});
	
	$(".js-leftmess").click(function () {
	  $('.sitefixform').show().addClass('h420').animate({opacity: 1},500);
	  $('.leftorder').show();
	  $('.overlay').show();
	});
}



$('document').ready(function(){
	hideHeaderprodchoose();
	slideMePleasePrettyPlease();
	form();
	overlay();
	order();
	
	jQuery('input,textarea').placeholder();
});

 $(window).load(function() {
	setEqualHeight($(".product-item-title"));
	setEqualHeight($(".product-item-info"));
});
$(window).resize(function () {
	setEqualHeight($(".product-item-title"));
	setEqualHeight($(".product-item-info"));

 });