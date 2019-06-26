// Debounce do Lodash
debounce = function(func, wait, immediate) {
	let timeout;
	return function() {
		let context = this, args = arguments;
		let later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		let callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};


(function(){
	let $target = $('.anime'),
			animationClass = 'anime-start',
			offset = $(window).height() * 3/4;

	function animeScroll() {
		let documentTop = $(document).scrollTop();

		$target.each(function(){
			let itemTop = $(this).offset().top;
			if (documentTop > itemTop - offset) {
				$(this).addClass(animationClass);
			} else {
				$(this).removeClass(animationClass);
			}
		});
	}

	animeScroll();

	$(document).scroll(debounce(function(){
		animeScroll();
	}, 100));
})();


