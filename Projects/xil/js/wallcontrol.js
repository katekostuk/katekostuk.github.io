
var lastMove = new Date().getTime() ,currentTime;
$(window).mousemove(function(){
  lastMove = new Date().getTime();
});
setInterval(function(){
	currentTime = new Date().getTime();
	if(currentTime - lastMove > 100){
		$("body").removeClass('mousemove');
	}
	else{ 
		$("body").addClass('mousemove');
	}
},20);

var audio = $("#soundhover")[0];
audio.volume = 0.3; 
	

//Массив фото для галереи
var images = [
	{
	  href : "img/gallery/1.jpg",
	  title : "1 Человек различает окружающие его предметы по форме. Интерес к форме какого-либо предмета может быть продиктован жизненной необходимостью, а может быть вызван красотой формы."
	},
	{
	  href : "img/gallery/2.jpg",
	  title : "Image 222222"
	},
	{
	  href : "img/gallery/3.jpg",
	  title : "Image 33333333"
	 },
	{
	  href : "img/gallery/4.jpg",
	  title : "4 Человек различает окружающие его предметы по форме. Интерес к форме какого-либо предмета может быть продиктован жизненной необходимостью, а может быть вызван красотой формы."
	 },
	{
	  href : "img/gallery/5.jpg",
	  title : "Image 555555"
	 },
	{
	  href : "img/gallery/6.jpg",
	  title : "Image 6"
	 },
	{
	  href : "img/gallery/7.jpg",
	  title : "7 Человек различает окружающие его предметы по форме. Интерес к форме какого-либо предмета может быть продиктован жизненной необходимостью, а может быть вызван красотой формы. "
	 },
	{
	  href : "img/gallery/8.jpg",
	  title : "8 Человек различает окружающие его предметы по форме. Интерес к форме какого-либо предмета может быть продиктован жизненной необходимостью, а может быть вызван красотой формы."
	 },
	{
	  href : "img/gallery/9.jpg",
	  title : "Image 9"
	 },
	{
	  href : "img/gallery/10.jpg",
	  title : "10 Человек различает окружающие его предметы по форме. Интерес к форме какого-либо предмета может быть продиктован жизненной необходимостью, а может быть вызван красотой формы."
	 },
	{
	  href : "img/gallery/11.jpg",
	  title : "Image 11"
	 },
	{
	  href : "img/gallery/12.jpg",
	  title : "Image 12"
	 },
	{
	  href : "img/gallery/13.jpg",
	  title : "13 Человек различает окружающие его предметы по форме. Интерес к форме какого-либо предмета может быть продиктован жизненной необходимостью, а может быть вызван красотой формы."
	 },
	{
	  href : "img/gallery/14.jpg",
	  title : "Image 14"
	 },
	{
	  href : "img/gallery/15.jpg",
	  title : "Image 15"
	 },
	 {
	  href : "img/gallery/16.jpg",
	  title : "Image 16"
	 },
	 {
	  href : "img/gallery/21.jpg",
	  title : "Image 17"
	 },
	 {
	  href : "img/gallery/22.jpg",
	  title : "Image 18"
	 },
	 {
	  href : "img/gallery/23.jpg",
	  title : "Image 19"
	 },
	 {
	  href : "img/gallery/18.jpg",
	  title : "Image 20"
	 },
	  {
	  href : "img/gallery/17.jpg",
	  title : "Image 21"
	 }
];

// Define The Wall
var arrayLenght = images.length; // Считаем количество фото в массиве
var maxLength    = arrayLenght; // Обьявляем мексимальное количество фото
var counterFluid = 1;
var imgSrc;
var text;
var maxHeight;
var sizeW;
var sizeH;
var wh;
var ww;
var trig = true;
if ($(window).width() < 768) {
	sizeW = 200;
	sizeH = 200;
	wh = (($("html").height() / 200) / 2);
	ww = (($("html").width() / 200) / 2);
}else{
	sizeW = 300;
	sizeH = 300;
	wh = (($("html").height() / 300) / 2);
	ww = (($("html").width() / 300) / 2);
}


var wh2 =parseInt(wh);
var ww2 = parseInt(ww);

function photos(){
	var x = 0;
	while(x < arrayLenght){
		$('.galleryview').find('.galleryview-i').append('<img src="'+images[x].href+'" alt="'+images[x].title+'" class="galleryview-img">');
		x++;
	}
	$('.galleryview-i').find('.galleryview-img').first().addClass('first');
	$('.galleryview-i').find('.galleryview-img').last().addClass('last');
}
function photosChange(){
	var prevT;
	$('.galleryview-prev').click( function(){
		var _this = $('.galleryview-i').find('.active');
		if(_this.hasClass('first')){
			prevT = $('.galleryview-img').last().attr('alt');
			$('.galleryview').find('.galleryview-t-wp').text(prevT);
			$('.galleryview-img').last().addClass('active');
			_this.removeClass('active');
		}else{
			prevT = _this.prev().attr('alt');
			 $('.galleryview').find('.galleryview-t-wp').text(prevT);
			_this.prev().addClass('active');
			_this.removeClass('active');
		}
	});
	$('.galleryview-next').click( function(){
		var _this = $('.galleryview-i').find('.active');
		if(_this.hasClass('last')){
			 prevT = $('.galleryview-img').first().attr('alt');
			 $('.galleryview').find('.galleryview-t-wp').text(prevT);
			 $('.galleryview-img').first().addClass('active');
			_this.removeClass('active');
		}else{
			prevT = _this.next().attr('alt');
			$('.galleryview').find('.galleryview-t-wp').text(prevT);
			_this.next().addClass('active');
			_this.removeClass('active');
		}
	});
	
	$(document).on('keydown', function(e) {
		if(e.keyCode == 37) {
			var _this = $('.galleryview-i').find('.active');
			if(_this.hasClass('first')){
				prevT = $('.galleryview-img').last().attr('alt');
				$('.galleryview').find('.galleryview-t-wp').text(prevT);
				$('.galleryview-img').last().addClass('active');
				_this.removeClass('active');
			}else{
				prevT = _this.prev().attr('alt');
				 $('.galleryview').find('.galleryview-t-wp').text(prevT);
				_this.prev().addClass('active');
				_this.removeClass('active');
			}
		}
		if(e.keyCode == 39) {
			var _this = $('.galleryview-i').find('.active');
			if(_this.hasClass('last')){
				 prevT = $('.galleryview-img').first().attr('alt');
				 $('.galleryview').find('.galleryview-t-wp').text(prevT);
				 $('.galleryview-img').first().addClass('active');
				_this.removeClass('active');
			}else{
				prevT = _this.next().attr('alt');
				$('.galleryview').find('.galleryview-t-wp').text(prevT);
				_this.next().addClass('active');
				_this.removeClass('active');
			}
		}
	});
}


// store a reference to the callback
var wallFluid = new Wall("wall", {
                "draggable":true,
                "inertia":true,
                "width":sizeW,
                "height":sizeH,
                "rangex":[-100,100],
                "rangey":[-100,100],
                callOnUpdate: function(items){
					 items.each(function(e, i){
						 var a = new Element('img', {
								src: images[(counterFluid -1)].href,
								alt: images[(counterFluid -1)].title,
								events: {
								  'click': function(e) {
									 if( wallFluid.getMovement() ){
                                     }else{
										var coordT = $(this).parents('.tile').attr('row');
										var coordL = $(this).parents('.tile').attr('col');
										var coordT2 = parseInt(coordT) - wh2;
										var coordL2 = parseInt(coordL) - ww2;
										e.stop();
   										wallFluid.moveTo(coordL2, coordT2);
										
                                        imgSrc = $(this).parents('.tile').find('img').attr('src');
										 text = $(this).parents('.tile').find('img').attr('alt');
										 
										 $('.galleryview').find('img[src$="'+imgSrc+'"]').addClass('active');
										 $('.galleryview').find('.galleryview-t-wp').text(text);
										 setTimeout(function(){
											$('.galleryview').addClass('active');
										 }, 600);
										 
										 
                                    }
								  },
								  'mousedown': function(e) {
									 if(trig){
										$('.gallery-drag').addClass('animHide'); 
										trig = false;
									 }
								  },
								  'touchstart': function(e) {
									  if(trig){
										$('.gallery-drag').addClass('animHide'); 
										trig = false;
									 }
									 var coordT = $(this).parents('.tile').attr('row');
									 var coordL = $(this).parents('.tile').attr('col');
									 var coordT2 = parseInt(coordT) - wh2;
									 var coordL2 = parseInt(coordL) - ww2;
									 e.stop();
   									 wallFluid.moveTo(coordL2, coordT2);
									 
									 imgSrc = $(this).parents('.tile').find('img').attr('src');
									 text = $(this).parents('.tile').find('img').attr('alt');
									 
									 $('.galleryview').find('img[src$="'+imgSrc+'"]').addClass('active');
									 $('.galleryview').find('.galleryview-t-wp').text(text);
									 setTimeout(function(){
											$('.galleryview').addClass('active');
									 }, 600);
								  },
								  'mouseenter': function(e) {
									 audio.play();
								  },
								  'mouseleave': function(e) {
									audio.pause();
									audio.currentTime = 0;
								  },
								}
							 
						});
                        a.inject(e.node).fade("hide").fade("in");
                        counterFluid++;
                        // Reset counter
                        if( counterFluid > maxLength ) {counterFluid = 1};
                     });
                }
            });
wallFluid.initWall();
photos();
photosChange();
