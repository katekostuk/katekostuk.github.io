
function playVideo(){
	setTimeout(function(){
		video.play();
	}, 1400);	
var slidesCount = $('.mainvideo-item').length;
   var _this = $('.slick-active');
   var video = $('.slick-active').find('.videoClass')[0];
   //var animProgress = $('.slick-active').find('.mainvideo-item-Progressoverlay');

	$(".v-controls-play").click(function () {
		video = $('.slick-active').find('.videoClass')[0];
		if (video.paused || video.ended) {
		  $(this).removeClass('pause');
		  video.play();
	   }
	   else {
		  $(this).addClass('pause');
		  video.pause();
		  console.log(video);
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
	
	$('.videoClass').each(function( index ) {
		this.addEventListener("play",  function () { 
		var video_dur = this.duration;
		$('.slick-active').find('.mainvideo-item-Progressoverlay').addClass('animated');
		$('.slick-active').find('.mainvideo-item-Progressoverlay').css({'animation-duration': video_dur + 's', 'animation-play-state': 'running'});
	}, false);
	});
	
	$('.videoClass').each(function( index ) {
		this.addEventListener("pause",  function () { 
		$('.slick-active').find('.mainvideo-item-Progressoverlay').css({'animation-play-state': 'paused'});
	}, false);
	});

	$('.videoClass').each(function( index ) {
		this.addEventListener("timeupdate",  function () { 
   		onTrackedVideoFrame(this.currentTime);
		updateProgress();
	}, false);
	});
	
	$('.videoClass').each(function( index ) {
		this.addEventListener('ended', function () { 
		$('.slick-active').find('.mainvideo-item-Progressoverlay').removeClass('animated');
		if(slidesCount == 1){
			this.play();	
		}else if(slidesCount >= 2){
			this.pause();
			$('.mainvideo').slick('slickNext');
			setTimeout(function(){
			  video = $('.slick-active').find('.videoClass')[0];
			  video.play();
			  console.log(video);
			}, 100);
		}
		});
		
		
	}, false);
}	
$('document').ready(function(){
	playVideo();
});