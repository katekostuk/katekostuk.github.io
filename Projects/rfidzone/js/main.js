/*========================Стилизации елементов форм=========================*/
(function($) {
	$(function() {
	
	  $('.formstyler').styler();
	
	});
})(jQuery);



$('document').ready(function(){
	
	/*========================Placeholder for old browsers=========================*/
	jQuery('input,textarea').placeholder();
	
	/*========================slick main slider=========================*/
	
			$('.js--main-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			arrows:true,
			responsive: [
				{
				  breakpoint: 999,
				  settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				  }
				},
			  ]
		});
	/*======================Placeholder for form hide on focus================*/

		$(function () {
		    $('.inputall').focusin(function () {
		    	s =$(this).attr('placeholder');
		        $(this).attr('placeholder', '');
		    })
		    $('.inputall').focusout(function () {
		        $(this).attr('placeholder', s);
		    });

		});
	/*======================order page clock on button checkout======================*/ 
	$('.b-subscribe__wrap  .js--subsctibe-form').click(function(e) {
			e.preventDefault();
		if(validationParrent('b-subscribe__wrap')) {					
			$('.b-subscribe__wrap .b-subscribe__form').hide();
			$('.b-subscribe__wrap .thanks_sms').show();
			}
		});	
		$(".b-subscribe__wrap .close_thanks_sms").click(function (e) {
			e.preventDefault();
			formResetParrent("b-subscribe__wrap");
			$('.b-subscribe__wrap .thanks_sms').hide();
			$('.b-subscribe__wrap .b-subscribe__form').show();
	
		});

	
	/*======================more info hover show info======================*/ 	
	if ($(window).width() > 999) {
	   $(".b-catalog__item").mouseenter(function () { 
			$(this).addClass('active-block');
		});

		 $(".b-catalog__item").mouseleave(function () {  
			 $(this).removeClass('active-block');		 	
		});
	}
	/*======================hide show header on scroll======================*/ 	
	
	if ($(window).width() > 770) {
		var lastScrollTop = 0;
			$(window).scroll(function(event){
				var st = $(this).scrollTop();                
				if (st > lastScrollTop ){
				   $('body').removeClass('fix-header');
					$('header').fadeOut(100);
				} else if (st == 0){
				    $('body').removeClass('fix-header');
					$('header').fadeIn(300);
   			} else {
				   $('body').addClass('fix-header'); 
					$('header').fadeIn(300);
      			}
			lastScrollTop = st;
		});
	}
	/*======================burder mobile======================*/ 	
		$('.burger').click(function() {
			$('.menu-mob').addClass('active');
		});
		$('.close-mobmenu').click(function() {
			$('.menu-mob').removeClass('active');
		});

		$(".menu-mob .li-sub-show").on('click touchend',function(e) {
				e.preventDefault();	
				$(this).toggleClass('clicked');
		
		if($('.clicked').length) {			
				$(this).each(function() {
					 $(this).find(".nav-submenu-mob").slideDown(100);	
					 $(this).siblings(".li-sub-show").find(".nav-submenu-mob").slideUp(100);
				 });
			} else {
			$(this).find(".nav-submenu-mob").slideUp(100);				
		}
	});
});
		
/*======================function formReset ======================*/ 

var fileName = "";
function formResetParrent(parrent) {
	var el = ["name", "email"];	

	for (ttt in el) {
		var o = ".XXX #YYY";
		u  = o.replace("XXX", parrent);
		y  = u.replace("YYY", el[ttt]);
//		console.log(y);
		var par = document.querySelector(y);
		try {			
			par.value = "";
			par.setAttribute("value", ""); 
			}

		catch(TypeError) {
//				console.log("TypeError" + el[ttt]);

			}
		}
  } 
  
 
(function($){
        $(window).on("load",function(){
            $(".b-scroll__right").mCustomScrollbar();
        });
})(jQuery);

/*=============================dif func===============================*/
function difFunc(){
	$('.js__list-tit').click(function() {
		$(this).parents('.js__list-item').toggleClass('active');
		$(this).parents('.js__list-item').find('.js__list-text').slideToggle(500);
  	});
	
	$(".jsagreed").click(function () {
		$(this).toggleClass('checked').toggleClass("noflag");
		$(this).parents('.forms').find('.subbutt').toggleClass('disable');
	});
	$(".js-removeprod").click(function () {
		$(this).parents('tr').remove();
	});
	$(".js--checkboxc").click(function () {
		$(this).toggleClass('checked');
	});
	
	
	$(".js--hburlo").click(function () {
		$('.urlo').slideUp(400);
	});
	$(".js--shurlo").click(function () {
		$('.urlo').slideDown(400);
	});
	
	if($('.js--shurlo .jq-radio').hasClass('checked')){
		$('.urlo').slideDown(0);
	}else{
		$('.urlo').slideUp(0);
	}
	
	
	$(".js--deloptone").click(function () {
		if($(this).hasClass('disabled')){
			return false;
		}else{
			$('.basketdatas-delopts__info').slideUp(400);
		}
		
	});
	$(".js--delopttwo").click(function () {
		if($(this).hasClass('disabled')){
			return false;
		}else{
			$(".js--deloptthree").parents('.basketdatas-delopts__item').find('.basketdatas-delopts__info').slideUp(400);
			$(this).parents('.basketdatas-delopts__item').find('.basketdatas-delopts__info').slideDown(400);
		}
	});
	$(".js--deloptthree").click(function () {
		if($(this).hasClass('disabled')){
			return false;
		}else{
			$(".js--delopttwo").parents('.basketdatas-delopts__item').find('.basketdatas-delopts__info').slideUp(400);
			$(this).parents('.basketdatas-delopts__item').find('.basketdatas-delopts__info').slideDown(400);
		}
		
	});
	if($('.js--delopttwo').hasClass('checked')){
		 $('.js--delopttwo').parents('.basketdatas-delopts__item').find('.basketdatas-delopts__info').slideDown(0);		
	}else{
		$('.js--delopttwo').parents('.basketdatas-delopts__item').find('.basketdatas-delopts__info').slideUp(0);
	}
	if($('.js--deloptthree').hasClass('checked')){
		$('.js--deloptthree').parents('.basketdatas-delopts__item').find('.basketdatas-delopts__info').slideDown(0);
	}else{
		$('.js--deloptthree').parents('.basketdatas-delopts__item').find('.basketdatas-delopts__info').slideUp(0);
	}
	
	$(".basketdatas-delopts__item-m").click(function () {
		$('.js-mapdel').slideToggle(400);
	});

	
}




$('document').ready(function(){
	
	/*========================Placeholder for old browsers=========================*/
	//jQuery('input,textarea').placeholder();
	difFunc();
});



function validationParrent(parrent){

		var par = document.getElementsByClassName(parrent)[0];
        var numberfield = par.getElementsByClassName("fields").length;
//        console.log(numberfield);

        var allert = false;
        for(var i=0;i<numberfield;i++){
            var fieldVal = par.getElementsByClassName('fields')[i].value;			

			// For emails only
            var emailIf = par.querySelector('.inputall.email');
            if (emailIf) {       

				if(!/[a-zA-Z]+[-._a-zA-Z0-9]*@(?:[a-zA-Z0-9][-a-zA-Z0-9]*\.)+[a-zA-Z]{2,6}/.test(par.getElementsByClassName('email')[0].value))

	                {
	                    if(allert == par.getElementsByClassName('email')[0].getAttribute('id')){
	                        par.getElementsByClassName('email')[0].classList.add('error');
	                        allert = true;

	                    }else if(!allert){
	                        par.getElementsByClassName('email')[0].classList.add('error');
	                        allert = true;
	                    }                  

	                  }
	                else {
	                    par.getElementsByClassName('email')[0].classList.remove('error');
	             }

			}	
			// For uploaded files only
			var fileIf = par.querySelector('#file-upload');
			if (fileIf) {	
				if (fileName.lastIndexOf(".pdf")==-1 && fileName.lastIndexOf(".doc")==-1 && fileName.lastIndexOf(".docx")==-1) {		

					par.getElementsByClassName('custom-file-upload')[0].classList.add('error');
					allert = true;					
				} else {
					par.getElementsByClassName('custom-file-upload')[0].classList.remove('error');
					}
			}
            if(fieldVal.length != 0)
            {
                if(!checkfield(par.getElementsByClassName('fields')[i]))
                {
                    par.getElementsByClassName('fields')[i].classList.add('error');		
                    allert = true;
                }
                else {

                    par.getElementsByClassName('fields')[i].classList.remove('error');
                }

            }else{

				par.getElementsByClassName('fields')[i].classList.add('error');
                allert = true;
			}

        }

        if(allert){

           return false; 
        }else{
            return true;
        }
        
        function checkfield(val){

            var regulations = {
                name:{
                        step_0:/^[А-яІіЇїa-zA-Z0-9\s.'''-]$/,
                        numb_symbol_min_0:1,
                        numb_symbol_max_0:0,
                        action_step_0:true,
                    },
            };
            var vall = val;
            var step = 0;
            var symbol = 0;
            for(var i=0;i<vall.value.length;i++){
                if(regulations[vall.id]['action_step_'+step])
                { console.log(vall.id);
                   if(!regulations[vall.id]['step_'+step].test(vall.value[i]))
                   {
                       symbol--;
                       if (minvalue())
                       {
                           i--;
                           symbol=0;
                           step++;
                       }
                       else {
                           return false;
                       }
                   } 
                   else if(regulations[vall.id]['step_'+step].test(vall.value[i])){
                        if(maxvalue()){
                            if(vall.value[i+1]){
                                symbol++;
                            }
                            else {
                                if(minvalue()){
                                    //////////////////////////////////поместить в функцию
                                    var stepplus = step;
                                    while(regulations[vall.id]['action_step_' + (+stepplus+1)]){
                                        if(regulations[vall.id]['numb_symbol_min_'+(+stepplus+1)] != 0)
                                        {
                                            return false;
                                        }
                                        else {
                                            stepplus++; 
                                        }
                                    }
                                    ///////////////////////////////поместить в функцию
                                    return true;
                                }
                                else {
                                    return false;
                                }
                            }
                        }
                        else {
                            if(vall.value[i+1])
                            {
                                symbol=0;
                                step++;
                            }else{
                                if(minvalue())
                                {
                                    //////////////////////////////////поместить в функцию
                                    var stepplus = step;
                                    while(regulations[vall.id]['action_step_' + (+stepplus+1)]){
                                        if(regulations[vall.id]['numb_symbol_min_'+(+stepplus+1)] != 0)
                                        {
                                            return false;
                                        }else{
                                          stepplus++; 
                                        }
                                    }
                                    //////////////////////////////////поместить в функцию
                                    return true;
                                }else{
                                    return false;
                                }
                            }
                        }
                   }
                }else{
                    return false;
                }
            }



            function minvalue(){

                if(regulations[vall.id]['numb_symbol_min_'+step] == 0)

                {

                    return true;

                }else if(regulations[vall.id]['numb_symbol_min_'+step]<= symbol+1){

                    return true;

                }else{

                    return false;

                }

            }



            function maxvalue(){

                if(regulations[vall.id]['numb_symbol_max_'+step] == 0)

                {

                    return true;

                }else if(regulations[vall.id]['numb_symbol_max_'+step] > symbol+1){

                    return true;

                }else{

                    return false;

                }

            }

            

            return true;

        }

    }


/*=============================Form Check===============================*/
$(function frmotpr(){
        var field = new Array("name", "tel", "message", "company", "mail");
        $(".forms").submit(function() {
            var error=0;
			var reg = /^[а-яА-ЯёЁІіЇїa-zA-Z-\s]{2,30}$/;
			var regText = /^[0-9А-яЁёІіЇїA-z\s.;,!?%$()"':]{2,500}$/;
			var regMail = /[0-9a-zA-Z]+@(?:[-a-z0-9]+\.)+[a-z]{2,6}/;
            $(this).find(":input").each(function() {
                for(var i=0;i<field.length;i++){
                    if($(this).attr("name")==field[i]){
                        if(!$(this).val()){
                            $(this).addClass('error');
                            error=1;    
                        }else{
                            $(this).removeClass('error');							
                        }
                    }                       
                } 
				              
           });
		   $(this).find(".fieldname").each(function() {
                for(var i=0;i<field.length;i++){
                    if($(this).attr("name")==field[i]){
						var r=$(this).val();
                        if (!reg.test(r)) {
							$(this).addClass('error');
                            error=1;
						}else{
                            $(this).removeClass('error');
                        }
                    }                       
                } 
				              
           });
		   $(this).find(".fieldtext").each(function() {
                for(var i=0;i<field.length;i++){
                    if($(this).attr("name")==field[i]){
						var r=$(this).val();
                        if (!regText.test(r)) {
							$(this).addClass('error');
                            error=1;
						}else{
                            $(this).removeClass('error');
                        }
                    }                       
                } 
				              
           });
		   $(this).find(".fieldmail").each(function() {
                for(var i=0;i<field.length;i++){
                    if($(this).attr("name")==field[i]){
						var r=$(this).val();
                        if (!regMail.test(r)) {
							$(this).addClass('error');
                            error=1;
						}else{
                            $(this).removeClass('error');
                        }
                    }                       
                } 
				              
           });
           $(this).find(".fieldtel").each(function() {
                for(var i=0;i<field.length;i++){
                    if($(this).attr("name")==field[i]){
						var reLenght, re,s;
						s = $(this).val();
						re = /\D+/ig;
						reLenght = s.replace(re, '').length;
                        if (reLenght !== 12 ) {
							$(this).addClass('error');
                            error=1;
						}else{
                            $(this).removeClass('error');
                        }
                    }                       
                } 
				              
           });
		   
		   if($(this).find(".jsagreed").hasClass('noflag')){
			  error=1; 
		   }
		   
            if(error==0){
             $(this).find('.form-data').hide();
			 $(this).find('.form-tnx').show();
			 return false;
			 
            }else{
            var err_text = ""; 
            return false;
            }
        })
    });


