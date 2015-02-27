var ie = 0, ff = 0, ch = 0, sa = 0;

/* $(document).ready(function () {
    //initialize swiper when document ready  
    var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
	  pagination: '.swiper-pagination',
      paginationClickable: '.swiper-pagination',
	  autoplay: 2500
    })        
}); 
 */
$(function () {
    $("#sliderHome").excoloSlider({
        mouseNav: false,
        interval: 2000,
        playReverse: true,
		autoSize: true,
		height: 250
    });
	$("#sliderHealthApp").excoloSlider({
        mouseNav: false,
        interval: 2000,
        playReverse: true,
		autoSize: true,
		height: 450
    });
});
 
function init(){	

}