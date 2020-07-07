$(function () {
	$('.products__slider').slick({
		prevArrow: '<button class="slider-btn slider-btn__right"><i class="arrow arrow-right"></i></button>',
		nextArrow: '<button class="slider-btn slider-btn__left"><i class="arrow arrow-left"></i></button>',
		infinite: false
	});

	$('.questions__item-title').on('click', function () {
		$('.questions__item').removeClass('questions__item--active');
		$(this).parent().addClass('questions__item--active');
	});
});
