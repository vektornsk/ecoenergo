$(function() {

//=== Меню ховер ===
	
	$(".menu-sub").hover(
		function() {
			$(this).parent().addClass("action")
		}, function() {
			$(this).parent().removeClass("action")
			
		}
	);
	
	$(".menu-sub-sub").hover(
		function() {
			$(this).parent().addClass("action")
		}, function() {
			$(this).parent().removeClass("action")
			
		}
	);
	
//=== Fix меню ===
	var stickyHeaderTop = $('#nav').offset().top;

	$(window).scroll(function(){
		if( $(window).scrollTop() > stickyHeaderTop ) {
			$('#nav').css({position: 'fixed', top: '0px', width: '100%', 'z-index': '10', 'box-shadow': '1px 2px 5px 0.00px rgba(0, 0, 0, 0.37)'});
			$('#nav').css('display', 'block');
			$('.menu__item_catalog').removeClass('open');
		} else {
			$('#nav').css({position: 'static', top: '0px', 'box-shadow': 'none'});
			$('.menu__item_catalog').addClass('open');
			
		}
	});

}); //$
