$(function() {

/*=== Меню ховер ===*/
	
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
	
/*=== Fix меню ===*/
	var stickyHeaderTop = $('#nav').offset().top;

	$(window).scroll(function(){
		if( $(window).scrollTop() > stickyHeaderTop ) {
			$('#nav').css({position: 'fixed', top: '0px', width: '100%', 'z-index': '10', 'box-shadow': '1px 2px 5px 0.00px rgba(0, 0, 0, 0.37)'});
			$('#nav').css('display', 'block');
			$('.menu__item_catalog').removeClass('open');
		} else {
			$('#nav').css({position: 'static', top: '0px', 'box-shadow': 'none'});
			if($('.menu__item_catalog').hasClass('js-catalog')){
				$('.menu__item_catalog').addClass('open');
			}
			
			
		}
	});
	
/*=== menu-768 ====*/
	
	var wBody = $("body").width();
	
	$(window).resize( function() {
		wBody = $("body").width();
		console.log(wBody);
	});
	
	if (wBody <= 992){
		
		$('.js-sm-menu').on('click',function(e){
			var $menu = $(e.target);
			$menu.toggleClass('js-sm-menu-open',!$menu.is('.js-sm-menu-open'));
		});
		$('.js-sm-menu').on('click','.js-sm-menu-item',  function(e){
			var $jsSmMenuItem = $(e.target);

			$jsSmMenuItem.toggleClass('js-sm-menu-category-open',$jsSmMenuItem.is('.js-sm-menu-category-open'));
			$jsSmMenuItem.find('.menu-sub').toggle(!$jsSmMenuItem.is('.js-sm-menu-category-open'));
		});
		
	} 
	
	if (wBody <= 1024){
		$('.js-none-link').on('click', function(e){
			e.preventDefault();

		});
	}
	
/*=== proect ===*/
	
	var bgColor = "release__bg-color1";
	
	$('.release__link').hover(
			
		function() {
			
			if($(this).hasClass('release__link_color')){
				
				bgColor = "release__bg-color2";
			}else {
				bgColor = "release__bg-color1";
			}
			
			$(this.parentNode).find('.release__bg').addClass(bgColor)
		}, function() {
			$(this.parentNode).find('.release__bg').removeClass(bgColor)	
		}
	);
	
/*=== tabs ===*/
	
	$('ul.tabs').on('click', 'li:not(.active)', function() {
		//console.log($(this));
		$(this)
			.addClass('active').siblings().removeClass('active')
			.offsetParent().offsetParent().find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
	});
	
	
/*=== tabs-product-card ===*/	
	
	$('ul.tabs-product__list').on('click', 'li:not(.active)', function() {
		//console.log($(this));
		$(this)
			.addClass('active').siblings().removeClass('active')
			.offsetParent().offsetParent().find('div.tabs-product__content').removeClass('active').eq($(this).index()).addClass('active');
	});
	
/*=== support-tubs ====	*/
	$('ul.support-filter__list').on('click', 'li:not(.active)', function() {
		//console.log($(this));
		$(this)
			.addClass('active').siblings().removeClass('active');
	});
	
/*=== slide-news ===*/
	
	if ($('.news-slide').length){
		
		$('.news-slide').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			infinite: true,
			speed: 300,
			autoplay: true,
			autoplaySpeed: 2000,
			arrows: false
		});
		
	}
	
/*=== slide-wrap ===*/
	
	if($('.slide-wrap').length){
		
		$('.slide').slick({
			slidesToShow: 3,
			infinite: true,
			speed: 300,
			arrows: true,
			prevArrow: $('.prev-slide'),
			nextArrow: $('.next-slide'),
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
						
					}
				}
			]
		});
		
		
	}

/*=== slide-brand-menu =====*/	
	if ($('.slide-brand').length){
		$('.slide-brand').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			infinite: true,
			speed: 300,
			autoplay: true,
			autoplaySpeed: 2000,
			arrows: false
		});
	}
	
	
	
/*=== do 9Ikop9I ====*/
	$('.js-link').bind("click", function(e){
		e.preventDefault();
		
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top - 170
		}, 1000);
		
	});
	
	
/*=== map ===*/
	
	if ($('.map').length){
	
		ymaps.ready(function(){
			/*var myMap = new ymaps.Map("mapM", {
				center:[55.76, 37.64], // Москва
				zoom:10
			});*/
			var myMap2 = new ymaps.Map("mapN", {
				center:[55.03, 82.92], // Новосибирск
				zoom:10
			});
		});
	
	}
	
/*=== form data-name ====*/
	
	$('a').on('click', function(){
		var t = $(this).data('name');
			
		$('.js-text').html(t);
		
		
	});
	
/*=== form valid ====*/	
	
	$('.form-name').on('focusout', function(){
		
		$('.form-name').removeClass('error-inp');
		
		var nameLenght = $('.form-name').val().length;
		console.log(nameLenght);
		
		
		
	});
	
	
	
	
	
	
}); /*$*/
