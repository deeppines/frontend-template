//Button Top
//How use
//Add <div id="toTop"></div>
$(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 0 && !$('#toTop').hasClass('scrolling')) {
			$('#toTop').fadeIn();
		} else {
			$('#toTop').fadeOut();
		}
	});
	$('#toTop').click(function () {
		$('#toTop').fadeOut().addClass('scrolling');
		$('body,html').animate({
			scrollTop: 0
		}, 800, function () {

			$('#toTop').removeClass('scrolling');
		});
	});
	$('.smoothScroll').click(function (event) {
		var href = $(this).attr('href');
		var target = $(href);

		if (target.length) {
			event.preventDefault();
			var top = target.offset().top;
			$('html,body').animate({
				scrollTop: top - 190
			}, 500);
		}
	});
});