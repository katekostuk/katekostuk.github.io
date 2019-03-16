
function slider(){
			var img;
			var smItem = $(".sl-img");
			var sbItem = $(".productslider-bigimg");
			var smItemWidth = $(".sl-img").outerWidth();
			var smItemAmount = $(".sl-img").length;
			var smItemWidthFull;
			
			if(window.innerWidth > 500){
				smItemWidthFull = (smItemAmount * smItemWidth) - (4 * smItemWidth);
			}else{
				smItemWidthFull = (smItemAmount * smItemWidth) - (3 * smItemWidth);
			}
			
			var lastItem = $('.sl-img').filter(':last');
			var firstItem = $('.sl-img').filter(':first');
			lastItem.addClass('last-item');
			firstItem.addClass('first-item');			
			
			function smallSlider(){
				$('.productslider-smallimg-arrow-right').click(function(){
					var tt = $('.productslider-smallimg-items').position().left - 34;
					var tt2 = tt - smItemWidth;
					if( tt2 < (-smItemWidthFull)){
						$('.productslider-smallimg-items').css({'left': 0});
					}else{
						$('.productslider-smallimg-items').css({'left': tt2});
					}
				})
				
				$('.productslider-smallimg-arrow-left').click(function(){
					var tt = $('.productslider-smallimg-items').position().left - 34;
					var tt2 = tt + smItemWidth;
					if( tt2 > 0){
						$('.productslider-smallimg-items').css({'left': -smItemWidthFull});
					}else{
						$('.productslider-smallimg-items').css({'left': tt2});
					}
				})
			}
			smallSlider();
			
			 smItem.click(function(){
				img = $(this).get(0).outerHTML;
				sbItem.empty();
				sbItem.append($(img));
				//sHideItem.empty();
				//sHideItem.append($(img));
				$(smItem).removeClass('active-img');
				$(this).addClass('active-img');
			})
			
			function navSlider(){
				
				var sbItem = $(".productslider-bigimg");
				var sHideItem = $(".productslider-hideimg-img");
				var sHideBox = $('.productslider-hideimg');
				var wH = $( window ).height();
				
				$('html').addClass('overflowhid');
				$(".productslider-next, .productslider-hideimg-img").click(function(){
					var nextItem = $('.active-img').next('.sl-img');
					wH = $( window ).height();
					if($('.active-img').hasClass('last-item')){
						//return false;
						$('.sl-img').removeClass('active-img');
							firstItem.addClass('active-img');
							img = $('.active-img').get(0).outerHTML;
							sHideItem.empty();
							sHideItem.append($(img));	
							sbItem.empty();
							sbItem.append($(img));		
							$('.productslider-hideimg-img').find('img').addClass('imgheight').css({'max-height': wH});				
					}else{
						$('.active-img').animate({'opacity': '1' }, 0 , function(){
							$('.sl-img').removeClass('active-img');
							nextItem.addClass('active-img');
							img = $('.active-img').get(0).outerHTML;
							sHideItem.empty();
							sHideItem.append($(img));	
							sbItem.empty();
							sbItem.append($(img));
							$('.productslider-hideimg-img').find('img').addClass('imgheight').css({'max-height': wH});		
						});
					}	
					
				});
				
				$(".productslider-prev").click(function(){
					var prevtItem = $('.active-img').prev('.sl-img');
					wH = $( window ).height();
					
					if($('.active-img').hasClass('first-item')){
						//return false;
						$('.sl-img').removeClass('active-img');
							lastItem.addClass('active-img');
							img = $('.active-img').get(0).outerHTML;
							sHideItem.empty();
							sHideItem.append($(img));	
							sbItem.empty();
							sbItem.append($(img));
							$('.productslider-hideimg-img').find('img').addClass('imgheight').css({'max-height': wH});
					}else{
						$('.active-img').animate({'opacity': '1' }, 0 , function(){
							$('.sl-img').removeClass('active-img');
							prevtItem.addClass('active-img');
							img = $('.active-img').get(0).outerHTML;
							sHideItem.empty();
							sHideItem.append($(img));
							sbItem.empty();
							sbItem.append($(img));	
							$('.productslider-hideimg-img').find('img').addClass('imgheight').css({'max-height': wH});	
						});
					}	
				});
				
				$(".productslider-close, .productslider-overlay").click(function(){
					$('.productslider-hideimg').remove();
					$('html').removeClass('overflowhid');
				})
			}

			sbItem.click(function(){
				//sHideBox.addClass('active');
				var imgDefault = $(".productslider-bigimg").get(0).innerHTML;
				$('.productslider').append('<div class="productslider-hideimg"><div class="productslider-overlay"></div><div class="productslider-hideimg-nav"><div class="arrow productslider-next"></div><div class="arrow productslider-prev"></div><div class="productslider-wrapimg"><div class="productslider-close"></div><div class="productslider-hideimg-img">'+imgDefault+'</div></div></div></div>');
				$('.productslider-hideimg-img').find('img').addClass('imgheight');
				var wH = $( window ).height();
				$('.imgheight').css({'max-height': wH});
				navSlider();
			})
			
}
$('document').ready(function(){
	var wH = $( window ).height();
	$('.imgheight').css({'max-height': wH});
	slider();
});
$(window).resize(function () {
	wH = $( window ).height();
	$('.imgheight').css({'max-height': wH});
});
