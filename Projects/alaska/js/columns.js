$(window).resize(function () {
	
  setEqualHeight($(".equipment-items-item"));
  setEqualHeight($(".reviews-slider-slide"));
	
  });


  
function setEqualHeight(columns){
	var tallestcolumn = 0;
	
	columns.css('height', '');
	columns.each(
		function(){
	currentHeight = $(this).height();
	if(currentHeight > tallestcolumn){
			tallestcolumn = currentHeight;
			}
		}
	);
	columns.height(tallestcolumn);
}

$(window).load(function() {
	  setEqualHeight($(".equipment-items-item"));
  	  setEqualHeight($(".reviews-slider-slide"));
	
	});