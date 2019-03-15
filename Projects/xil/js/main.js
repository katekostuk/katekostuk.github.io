/*=============== Плеер на главной ==================*/
function playMainVideo(){

if( $('.content').hasClass('mainpage')){
	if ($(window).width() > 999) {
		setTimeout(function(){
			if($('.main').hasClass('active')){
				video.play();
			}
		}, 1000);	
	}
var slidesCount = $('.mainvideo-item').length;
   var _this = $('.slick-active');
   var video = $('.slick-active').find('.videoClass')[0];
   //var animProgress = $('.slick-active').find('.mainvideo-item-Progressoverlay');
	$(".v-controls-play").click(function () {
		video = $('.slick-active').find('.videoClass')[0];	
		if (video.paused || video.ended) {
		  $(this).removeClass('pause');
		  video.play();
		  $(this).attr("title", 'Pause');
	   }
	   else {
		  $(this).addClass('pause');
		  video.pause();
		  $(this).attr("title", 'Play');
		  /*var videoTimeLeft = video.duration - video.currentTime;
		    var value = Math.floor((100 / video.duration) * video.currentTime);
		    var value2 = 100 - value;
		    var _thisProgresslay = $('.slick-active').find('.mainvideo-item-Progressoverlay');
		    _thisProgresslay.removeClass('animated').removeAttr('style');
		    	setTimeout(function(){
					_thisProgresslay.css({'width': value2 +'%', 'animation-duration': videoTimeLeft + 's', 'opacity':'0'});
				}, 5);*/
	   }
	});
	
	
	function updateProgress() {
	   video = $('.slick-active').find('.videoClass')[0];
	   var progress = $('.slick-active').find('.progress')[0];
	   var value = 0;
	   if (video.currentTime > 0) {
		  value = Math.floor((100 / video.duration) * video.currentTime);
	   }
	   progress.style.width = value + "%";
		
	}
	
	function onTrackedVideoFrame(currentTime){
		var showTime = ((currentTime / 100).toFixed(2)).replace('.', ':');
		$(".v-controls-time").text(showTime);
	}
	$(".v-controls-mute").click(function () {
		video = $('.slick-active').find('.videoClass')[0];
		video.muted = !video.muted;
		if(video.muted){
			$(this).addClass('silince');
		}else{
			$(this).removeClass('silince');
		}
	});

	$('.v-controls-progress').click(function(e) {
		var offsetL = $('.slick-active').find('.v-controls-progress').offset().left;
	    var x = (e.pageX - offsetL) / $(this).width();
	    video = $('.slick-active').find('.videoClass')[0];
	    video.currentTime = x * video.duration;
	    var videoTimeLeft = video.duration - video.currentTime;

	    var value = Math.floor((100 / video.duration) * video.currentTime);
	    var value2 = 100 - value;
	    var _thisProgresslay = $('.slick-active').find('.mainvideo-item-Progressoverlay');
	    _thisProgresslay.removeClass('animated').removeAttr('style');
	    if (video.paused) {
	    	setTimeout(function(){
				_thisProgresslay.css({'width': value2 +'%', 'animation-duration': videoTimeLeft + 's', 'opacity':'0'});
			}, 5);
	    }
	    else {
			 setTimeout(function(){
				_thisProgresslay.css({'width': value2 +'%', 'animation-duration': videoTimeLeft + 's'}).addClass('animated');
			}, 5);
	    }

	});
	
	$(".slideNext-b").click(function () {
		if ($(window).width() > 767) {
			video = $('.slick-active').find('.videoClass')[0];
			video.pause();
			video.currentTime = 0;
			$('.slick-active').find('.mainvideo-item-Progressoverlay').removeClass('animated').css({'width': '100%'});
			$('.mainvideo').slick('slickNext');
			setTimeout(function(){
				 video = $('.slick-active').find('.videoClass')[0];
				 $('.slick-active').find('.v-controls-play').removeClass('pause');
				 var video_dur = video.duration;
	             $('.slick-active').find('.mainvideo-item-Progressoverlay').addClass('animated');
	             $('.slick-active').find('.mainvideo-item-Progressoverlay').css({'animation-duration': video_dur + 's', 'animation-play-state': 'running','width': '100%'});
				 video.play();
			}, 100);
		}
		
	});
	$(".slidePrev-b").click(function () {
		if ($(window).width() > 767) {
			video = $('.slick-active').find('.videoClass')[0];
			video.pause();
			video.currentTime = 0;
			$('.slick-active').find('.mainvideo-item-Progressoverlay').removeClass('animated').css({'width': '100%'});
			$('.mainvideo').slick('slickPrev');
			setTimeout(function(){
				 video = $('.slick-active').find('.videoClass')[0];
				 $('.slick-active').find('.v-controls-play').removeClass('pause');
				 var video_dur = video.duration;
	             $('.slick-active').find('.mainvideo-item-Progressoverlay').addClass('animated');
	             $('.slick-active').find('.mainvideo-item-Progressoverlay').css({'animation-duration': video_dur + 's', 'animation-play-state': 'running', 'width': '100%'});
				 video.play();
			}, 100);
		}
		
	});
		
	$('.videoClass').each(function() {
		this.addEventListener("play",  function () { 
		var video_dur = this.duration;
		var videoTimeLeft = this.duration - this.currentTime;
		$('.slick-active').find('.mainvideo-item-Progressoverlay').addClass('animated');
		$('.slick-active').find('.mainvideo-item-Progressoverlay').css({'animation-duration': videoTimeLeft + 's', 'animation-play-state': 'running', 'opacity':'1'});

	}, false);
	});
	
	$('.videoClass').each(function() {
		this.addEventListener("pause",  function () { 
		//$('.slick-active').find('.mainvideo-item-Progressoverlay').css({'animation-play-state': 'paused', 'opacity':'0'});
		//$('.slick-active').find('.mainvideo-item-Progressoverlay').removeClass('animated').removeAttr('style');
	    var videoTimeLeft = video.duration - video.currentTime;

	    var value = Math.floor((100 / video.duration) * video.currentTime);
	    var value2 = 100 - value;
	    var _thisProgresslay = $('.slick-active').find('.mainvideo-item-Progressoverlay');
	    _thisProgresslay.removeClass('animated').removeAttr('style');
	    	setTimeout(function(){
				_thisProgresslay.css({'width': value2 +'%', 'animation-duration': videoTimeLeft + 's', 'opacity':'0'});
			}, 5);
	}, false);
	});

	$('.videoClass').each(function() {
		this.addEventListener("timeupdate",  function () { 
   		onTrackedVideoFrame(this.currentTime);
		updateProgress();
	}, false);
	});
	
	$('.videoClass').each(function() {
		this.addEventListener('ended', function () { 
		$('.slick-active').find('.mainvideo-item-Progressoverlay').removeClass('animated').css({'width': '100%'});
		if(slidesCount == 1){	
			setTimeout(function(){
			  video = $('.slick-active').find('.videoClass')[0];
			  video.play();
			}, 70);
		}else if(slidesCount >= 2){
			this.pause();
			$('.mainvideo').slick('slickNext');
			setTimeout(function(){
			  video = $('.slick-active').find('.videoClass')[0];
			  $('.slick-active').find('.mainvideo-item-Progressoverlay').css({'width': '100%'});
			  if ($(window).width() > 999) {
			  	video.play();
			  }
			  $('.slick-active').find('.v-controls-play').removeClass('pause');
			}, 100);
		}
		});
		
		
	}, false);


}
}

function videoArrows(){
	var vButt = $('.slick-dots > li > button').first();
	var tPos = vButt.offset();
	$('.slick-arrow').css({ "left" : tPos.left , "top" : tPos.top});
	console.log(tPos);
}


function timer(){
	var i1 = 0;
	var i2 = 1;
	setInterval(function() {
	  if( i1 < 59){
		  if(i1 < 10){
			  $('.i1').html('0'+i1);
		  }else{
			   $('.i1').html(i1);
		  }
		  i1++;
	  }else if(i2 < 24){
		  if(i2 < 10){
			  $('.i2').html('0'+i2);
		  }else{
			 $('.i2').html(i2); 
		  }
		  i2++;
		  i1 = 0;
	  }else{
		  i1 = 0;
		  i2 = 0;
	  }
	  
	  
	}, 1);
}
function timer2(){
	var i3 = 24;
	var i4 = 12;
	setInterval(function() {
	  if( i3 < 59){
		  if(i3 < 10){
			  $('.i3').html('0'+i3);
		  }else{
			   $('.i3').html(i3);
		  }
		  i3++;
	  }else if(i4 < 24){
		  if(i4 < 10){
			  $('.i4').html('0'+i4);
		  }else{
			 $('.i4').html(i4); 
		  }
		  i4++;
		  i3 = 0;
	  }else{
		  i3 = 0;
		  i4 = 0;
	  }
	  
	  
	}, 1);
}


function scroll(val,el,timeout,step){
	var i=0;
	(function(){
	if(i<=val){
	setTimeout(arguments.callee,timeout);
	document.getElementById(el).innerHTML=i;
	i=i+step;
	}else{
	document.getElementById(el).innerHTML=val;
	}
	})();
}

if($('.whatwedo').hasClass('active')){
		scroll(500,'js-numOne',5,1);
	}

/*========================MENU=========================*/
function menu(){
	$('.js--menu').click(function(){
		if($(this).hasClass('menu-open')){
			$('.fixmenu').toggleClass('active');
			$(this).toggleClass('menu-open');
			$('.header-contacts').toggleClass('menu-open');
			$('.header-logo').toggleClass('menu-open');
			setTimeout(function(){
			   $('.fixmenu').removeClass('show');
			   $('.header-menu').removeClass('show');
			}, 500);
			 $('.header-contacts').removeClass('show');
		}else{
			$('.fixmenu').toggleClass('active');
			$(this).toggleClass('menu-open').addClass('show');
			$('.header-contacts').toggleClass('menu-open').addClass('show');
			setTimeout(function(){
			   $('.fixmenu').addClass('show');
			},1300);
			$('.header-logo').toggleClass('menu-open');
		}
		
	});
}


/*========================OUR WORK Hover function=========================*/

function ourWorkHover(){
	$( ".ourworks-link__video" ).hover(
	  function() {
		$('.ourworks-img__item__video').addClass('hovered');
	    $('.ourworks-title__item-item__video').addClass('hovered');
	  }, function() {
		$('.ourworks-img__item__video').removeClass('hovered');
		$('.ourworks-title__item-item__video').removeClass('hovered');
	  }
	);
	
	$( ".ourworks-link__photo" ).hover(
	  function() {
		$('.ourworks-img__item__photo').addClass('hovered');
		$('.ourworks-title__item-item__photo').addClass('hovered');
	  }, function() {
		$('.ourworks-img__item__photo').removeClass('hovered');
		$('.ourworks-title__item-item__photo').removeClass('hovered');
	  }
	);
}


/*========================Запуск анимации перехода=========================*/

function ajaxLinks(){
	$(".js-ajaxLink").click(function (e) {
		e.preventDefault();
		var pageName;
		var pageTitle;
		var pageTitleTwo;
		$('.animOverlay').attr('style', 'display:block');
		
		if($(this).hasClass('js-ajaxLink__right')){
			$('.animOverlay').addClass('animOverlay__disappear-right');
		}else{
			$('.animOverlay').addClass('animOverlay__disappear');
		}
		
		pageName = $(this).attr('data-name');
		pageTitle = $(this).attr('data-tit');
		pageTitleTwo = $(this).attr('data-titsm');
		
		$('.animOverlay-NextPage > div').text(pageName);
		$('.animOverlaytitle-tit').text(pageTitle);
		$('.animOverlaytitle-titsm').text(pageTitleTwo);	
		
		
		setTimeout(function(){
			$('.animOverlay').addClass('animOverlay__appear').removeClass('animOverlay__disappear animOverlay__disappear-right');
				setTimeout(function(){
				$('.animOverlay').attr('style', 'display:none');
				$('.animOverlay').removeClass('animOverlay__appear')
			}, 2000);
		}, 4000);
	});
}

function showMoreAbout(){
	$('.js-showmoreI').click(function(){
		if ($(window).width() < 768) {
			$('.videoin > .videoin-about > .videoin-desc').slideToggle(200);
			$('.videoin').toggleClass('open');
		}else{
			$('.videoin').addClass('open');
		}
	});
	$('.js--closemoreI').click(function(){
		$('.videoin').removeClass('open');
	});
}

function gallery(){
	var wH;
	wh = $(window).height();
	$('.galleryview-img').each(function(){
		$(this).css({'max-height': wh});
	})
	$('.js--closeGal').click(function(){
		$('.galleryview').removeClass('active');
		$('.galleryview-img').removeClass('active');
	})
}

/*========================Анимированный label для input=========================*/
function inputCheckFill(){
$('.forminput').focusout(function() {
			$('.animinput').removeClass('focus');
		});
		$('.forminput').focus(function() {
			$(this).closest('.animinput').addClass('focus');
		});
	
		/// Input Kepress Filled  Focus
		$('.forminput').keyup(function() {
			if($(this).val().length > 0){
				$(this).closest('.animinput').addClass('filled');
			}
	
			else{
				$(this).closest('.animinput').removeClass('filled');
			}
	   });
	   /// Input Check Filled Focus
    var $formControl = $('.forminput');
    var values = {};
    var validate =    $formControl.each(function() {
        if($(this).val().length > 0){
            $(this).closest('.animinput').addClass('filled');
        }
        else{
            $(this).closest('.animinput').removeClass('filled');
        }
    });

}

/*========================Высота textarea=========================*/
function textfildHeigh(){
	$('.textheight').focus(function() {
		$(this).addClass('active');
	});
	$('.textheight').focusout(function() {
		if($(this).val().length === 0){
			$(this).removeClass('active');
		}
	});
}

function formaccept(){
	$('.form-accept').click(function(){
		$(this).toggleClass('active').toggleClass("noflag");
		$(this).parents('.forms').find('.btn-wp').toggleClass('disable');
	});
}

/*========================Валидация=========================*/
$(function frmotpr(){
        var field = new Array("name", "tel", "messege");
        $(".forms").submit(function() {
            var error=0;
			var reg = /^[а-яА-ЯёЁІіЇїa-zA-Z-\s]{2,30}$/;
			var regText = /^[0-9А-яЁёІіЇїA-z\s.;,!?%$()"':]{2,500}$/;
			var regMail = /[0-9a-zA-Z]+@(?:[-a-z0-9]+\.)+[a-z]{2,6}/;
            $(this).find(":input").each(function() {
                for(var i=0;i<field.length;i++){
                    if($(this).attr("name")==field[i]){
                        if(!$(this).val()){
                            $(this).addClass('error').parents('.animinput').addClass('error');
                            error=1;    
                        }else{
                            $(this).removeClass('error').parents('.animinput').removeClass('error');;
							
                        }
                    }                       
                } 
				              
           });
		   $(this).find(".namefield").each(function() {
                for(var i=0;i<field.length;i++){
                    if($(this).attr("name")==field[i]){
						var r=$(this).val();
                        if (!reg.test(r)) {
							$(this).addClass('error').parents('.animinput').addClass('error');
                            error=1;
						}else{
                            $(this).removeClass('error').parents('.animinput').removeClass('error');
                        }
                    }                       
                } 
				              
           });
           $(this).find(".phonefield").each(function() {
                for(var i=0;i<field.length;i++){
                    if($(this).attr("name")==field[i]){
						var reLenght, re,s;
						s = $(this).val();
						re = /\D+/ig;
						reLenght = s.replace(re, '').length;
                        if (reLenght !== 12 ) {
							$(this).addClass('error').parents('.animinput').addClass('error');
                            error=1;
						}else{
                            $(this).removeClass('error').parents('.animinput').removeClass('error');
                        }
                    }                       
                } 
				              
           });
		   $(this).find(".textfield").each(function() {
                for(var i=0;i<field.length;i++){
                    if($(this).attr("name")==field[i]){
						var r=$(this).val();
                        if (!regText.test(r)) {
							$(this).addClass('error').parents('.animinput').addClass('error');
                            error=1;
						}else{
                            $(this).removeClass('error').parents('.animinput').removeClass('error');
                        }
                    }                       
                } 
				              
           }); 
		   if($(this).find(".form-accept").hasClass('noflag')){
			  error=1; 
		   }
		   
            if(error==0){
             $('.feedback-form').hide();
			 $('.feedback-tnx').show().addClass('active');
			 return false;
			 
            }else{
            var err_text = ""; 
            return false;
            }
        })
    });

/*========================Смена картинки в слайдере о нас на гиф=========================*/
function imgChange(){
	var imgStatic;
	var imgGif;
	$( ".we-sl-item-i" ).hover(
	  function() {
	  	imgStatic = $(this).find('.img-static').data('srcstatic');
	  	imgGif = $(this).find('.img-static').data('srcgif');
	    $( this ).find('.img-static').attr('src', imgGif);
	  }, function() {
	    $( this ).find('.img-static').attr('src', imgStatic);
	  }
	);
}

/*========================Плавный скролл=========================*/
function slideMePleasePrettyPlease(){
	$('a.anchoreto[href^="#"]').bind('click.smoothscroll',function (e) {
		e.preventDefault();
					 
		var target = this.hash,
		$target = $(target);
					 
		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
			}, 500, 'swing', function () {}
		);
	});
}
/*========================Стилизации елементов форм=========================*/
(function($) {
	$(function() {
	
	  $('.formstyler').styler();
	
	});
})(jQuery);


/*========================fullPage=========================*/

function craeteFullPage(){
	var delay = 1200; //milliseconds
	var timeoutId;
	var animationIsFinished = false;
	$('#fullpage').fullpage({
              menu: '#menu',
			  anchors: ['main', 'WhatWeDo', 'OurWorks', 'AboutUs', 'Contacts'],
			  normalScrollElements: '#we-sl',
			  fixedElements: '.fixmenu',
			  onLeave: function(index, nextIndex, direction){
				  //start video if scroll to section 1
				  if(nextIndex == 1){
				  	var video = $('.slick-active').find('.videoClass')[0];
					$('.slick-active').find('.v-controls-play').removeClass('pause');
					video.play();
				  }
				  
				  	var _thisM = $(this);
					//animating my element
					_thisM.addClass('animateSection');
				    setTimeout(function(){
						$('.section').removeClass('animateSection');
					}, delay);

				},
            });
	
}


/*========================Анимация шума=========================*/


function noiseAnimation(){
	        var getRandom = function(max) {
	        		return Math.floor(Math.random() * ++max);
	        	}
	        var noise = $('.noisesectionanim');
	        var trig = true;    
	        setInterval(function() {
	        	if(trig){
	        		noise.css({'background-position': getRandom(400) + 'px ' + getRandom(241) + 'px'});
	        	}
	        }, 100);
};

$('document').ready(function(){
	
	/*========================Placeholder for old browsers=========================*/
	jQuery('input,textarea').placeholder();

	timer();
	timer2();
	ourWorkHover();
	ajaxLinks();
	showMoreAbout();
	gallery();
	inputCheckFill();
	textfildHeigh();
	formaccept();
	menu();
	imgChange();
	slideMePleasePrettyPlease();
	noiseAnimation();
    

    /*========================вызовы для fullPage=========================*/
	if ($(window).width() < 768) {
        //$.fn.fullpage.destroy('all');
    }
    if ($(window).width() > 767 && ($(window).height() > 750)) {
       craeteFullPage();
   }
	$(document).on('click', '.js--slideUp', function(){
	  	$.fn.fullpage.moveSectionUp();
	});
	$(document).on('click', '.js-sctollbtm', function(){
	  	$.fn.fullpage.moveSectionDown();
	});

	/*========================Скрол слайдеров мышкой=========================*/
	if ($(window).width() > 999 && ($(window).height() > 750)) {
        $('.mousescroll-sl').mousewheel(function(e) {
			e.preventDefault();

			if (e.deltaY < 0) {
				$('.mousescroll-sl').slick('slickNext');
			}
			else {
				$('.mousescroll-sl').slick('slickPrev');
			}
		})
    }

	$(".phonemask").inputmask({ "mask": '+38(099)999-99-99'});
});

 $(window).load(function(){
	playMainVideo();
});

$(window).resize(function () {
	gallery();

	/*========================вызовы для fullPage=========================*/
	if ($(window).width() < 768) {
		if($('html').hasClass('fp-enabled')){
        	$.fn.fullpage.destroy('all');
    	}
    }
	if($(window).height() < 750) {
        if($('html').hasClass('fp-enabled')){
        	$.fn.fullpage.destroy('all');
    	}
    }
    if ($(window).width() > 767 && ($(window).height() > 750)) {
       craeteFullPage();
   }
 });

window.onload = function() {
		$('html').removeClass('loading');
}
