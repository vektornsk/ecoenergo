$(function() {

//=== Меню ховер ===
	
	$(".menu-sub__item").hover(
		function() {
			$(this).parent().parent().addClass("action")
		}, function() {
			$(this).parent().parent().removeClass("action")

		}
	);

	$(".menu-sub-sub__item").hover(
		function() {
			$(this).parent().parent().addClass("action")
		}, function() {
			$(this).parent().parent().removeClass("action")

		}
	);


}); //$
